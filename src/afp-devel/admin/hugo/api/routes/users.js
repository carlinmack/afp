var express = require('express');
var crypto = require('crypto');
var db = require('../db');

var router = express.Router();

router.get('/new', function(req, res, next) {
  res.render('signup');
});

module.exports = router;
