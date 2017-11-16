'use strict';
var router = require('express').Router();
var AV = require('leanengine');

var User = AV.Object.extend('_User');

//GET Route
router.get('/', function(req, res, next) {
  var query = new AV.Query(User);
  query.get('_User')
  query.find().then(function(results) {
    
    res.render('users', {
      users: results
    });
  }, 
  function(err) {
    if (err.code === 101) {
      // 该错误的信息为：{ code: 101, message: 'Class or object doesn\'t exists.' }，说明 Todo 数据表还未创建，所以返回空的 Todo 列表。
      // 具体的错误代码详见：https://leancloud.cn/docs/error_code.html
      res.render('users', {
        title: 'Users',
        todos: []
      });
    } else {
      next(err);
    }
  }).catch(next);
});

//Post Route
router.post('/', function(req, res, next) {
  var content = req.body.content;
  var user = new User();
  user.set('content', content);
  user.save().then(function(user) {
    res.redirect('/users');
  }).catch(next);
});

module.exports = router;
