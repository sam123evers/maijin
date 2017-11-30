'use strict';

var express = require('express');
var timeout = require('connect-timeout');
var path = require('path');
var logger = require('morgan')
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var AV = require('leanengine');

// 加载云函数定义，你可以将云函数拆分到多个文件方便管理，但需要在主文件中加载它们
//bringing in code from cloud.js file but there in nothig important in that file right now
require('./cloud');

var app = express();

// 设置模板引擎
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

//this line tells something to look in the public folder for some stuff
app.set('src', path.join(__dirname, 'src'));
// app.set('lib', path.join(__dirname, 'lib'));
// app.engine('html', renderFile)

//this line sets the view engine to html so it will read html files and not ejs files
app.set('view engine', 'html');
// app.set('view engine', 'ejs');


//specifies a root directory from which to serve static assets, like html files
//if no file is found there is next() function so that the server can keep looking and doesnt 404
//index.html file in public directory is being rendered because of this
app.use(express.static('lib'));

// 设置默认超时时间
app.use(timeout('15s'));

// 加载云引擎中间件
app.use(AV.express());

app.enable('trust proxy');
// 需要重定向到 HTTPS 可去除下一行的注释。
// app.use(AV.Cloud.HttpsRedirect());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', function(req, res) {
  res.render('index');
});

// 可以将一类的路由单独保存在一个文件中


app.use('/api/users', require('./routes/apiRouter'))

app.use(function(req, res, next) {
  // 如果任何一个路由都没有返回响应，则抛出一个 404 异常给后续的异常处理器
  if (!res.headersSent) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  }
});

// error handlers
app.use(function(err, req, res, next) {
  if (req.timedout && req.headers.upgrade === 'websocket') {
    // 忽略 websocket 的超时
    return;
  }

  var statusCode = err.status || 500;
  if (statusCode === 500) {
    console.error(err.stack || err);
  }
  if (req.timedout) {
    console.error('请求超时: url=%s, timeout=%d, 请确认方法执行耗时很长，或没有正确的 response 回调。', req.originalUrl, err.timeout);
  }
  res.status(statusCode);
  // 默认不输出异常详情
  var error = {};
  if (app.get('env') === 'development') {
    // 如果是开发环境，则将异常堆栈输出到页面，方便开发调试
    error = err;
  }
  res.render('error', {
    message: err.message,
    error: error
  });
});

module.exports = app;
