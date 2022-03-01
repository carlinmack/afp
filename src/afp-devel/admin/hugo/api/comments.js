var express = require('express');

var db = require('./db.js');
var router = express.Router();

// URL prefix: /api/comments/
router.get('/', function (req, res) {
    console.log('wolrd');
  res.send('Hello World');
});

router.get('/mostRecent', function (req, res, next) {
    console.log("hello")
    db.get(
        'select max(id) as mostRecent from comments',
        function (err, row) {
            if (err) {
                return next(err);
            }
            res.json({
                mostRecent: row.mostRecent,
            });
        }
    );
});

module.exports = router;
