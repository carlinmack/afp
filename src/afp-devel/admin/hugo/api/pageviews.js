var express = require('express');

var db = require('./db.js');
var router = express.Router();

// URL prefix: /api/pageviews/
router.post('/', function (req, res, next) {
    if (req?.body?.entries) {
        var entriesList = req.body.entries;
        if (entriesList.every((x) => x.match('^[/a-z0-9_-]+$'))) {
            Promise.all(
                entriesList.map((entry) => {
                    return getCount(entry);
                })
            ).then((counts) => {
                Promise.all(
                    entriesList.map((entry) => {
                        return getDownload(entry);
                    })
                ).then((downloads) => {
                    res.json({
                        entries: entriesList.map(getEntryName),
                        pageviews: counts,
                        downloads: downloads,
                    });
                });
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
                    reject('not found');
                }
                resolve(row.count);
            }
        );
    });
}

async function getDownload(entry) {
    return new Promise((resolve, reject) => {
        const downloadUrl = '/release/afp-' + getEntryName(entry) + '-current.tar.gz';
        db.get(
            'SELECT count(*) as count FROM logs WHERE request_url = ?',
            [downloadUrl],
            function (err, row) {
                if (err) {
                    reject('not found');
                }
                resolve(row.count);
            }
        );
    });
}

const getEntryName = entry => entry.match(/\/([a-z0-9_-]+)\/$/)[1];

module.exports = router;
