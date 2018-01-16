'use strict';
var router = require('express').Router();
var AV = require('leanengine');

var usersObject = AV.Object.extend('_User');

// GET Route
router.get('/', function(req, res, next) {
  
    var query = new AV.Query(usersObject);
    var pageNumber = req.query.page
    var perPage = 30
    query.limit(perPage)
    query.skip((perPage * pageNumber) - perPage)
    query.count(usersObject).then((userCount) => {
      query.find().then(function(userData) {
        res.json({
            "total_entries": userCount,
            "per_page": perPage,
            "userInfo": userData
        });
      });
    });
  
});


//GET user info by objectID
router.get('/user_profile/:id', function(req, res, next) {
  const id = req.params.id
  var query = new AV.Query(usersObject);
  query.get(id).then((results) => {
    res.json(results)
  })
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
