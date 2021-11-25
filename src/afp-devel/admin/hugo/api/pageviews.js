const sqlite3 = require('sqlite3').verbose();
var express = require('express');

var db = require('./db.js');
var router = express.Router();

// URL prefix: /api/auth/
router.post('/', function (req, res, next) {
    if (req?.body?.entries) {
        var entriesList = req.body.entries;
        if (entriesList.every((x) => x.match('^[/a-z_]'))) {
            Promise.all(
                entriesList.map((entry) => {
                    return getCount(entry);
                })
            ).then((result) => {
                res.json(Object.fromEntries(result));
            });
        } else {
            res.json({
                error: 'Entries list malformed',
            });
        }
    } else {
        res.json({
            error: 'No entry body',
        });
    }
});

async function getCount(entry) {
    return new Promise((resolve, reject) => {
        db.get(
            'SELECT count(*) as count FROM logs WHERE request_url = ?',
            [entry],
            function (err, row) {
                if (err) {
                    reject('not found')
                }
                resolve([entry, row.count])
            }
        );
    });
}

module.exports = router;
