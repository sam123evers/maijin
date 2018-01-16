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


//this line tells express to look in the lib folder for files to render
// app.set('src', path.join(__dirname, 'src'));
app.set('lib', path.join(__dirname, 'lib'));
// app.engine('html', renderFile)


//this line tells express that the extension of the file will be .html so it will read html files and not ejs files
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


app.use('/api/users', require('./routes/apiRouter'))

app.use((req, res, next) => {
  var err = new Error('Not Found');
    err.status(404);
    next(err);
});

// error handlers
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    err: {
      message: err.message
    }
  })
});

module.exports = app;