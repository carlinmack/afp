var express = require('express');

var db = require('../db.js');
var router = express.Router();

const createTopicsTable = () => {
    const query = `CREATE TABLE IF NOT EXISTS topics (username TEXT, topic TEXT)`;
    return db.run(query);
};

//call function to init the topic table
createTopicsTable();

// URL prefix: /api/topics/
router.get('/user', function (req, res) {
    if (req?.session?.passport?.user) {
        db.all(
            'SELECT topic FROM topics WHERE username = $user',
            {
                $user: req.session.passport.user.username,
            },
            function (err, rows) {
                if (err) {
                    return res.json(err);
                }
                if (rows != undefined) {
                    res.json({
                        authenticated: true,
                        topics: rows,
                    });
                } else {
                    res.json({ error: `User "${user}" not found` });
                }
            }
        );
    } else {
        res.clearCookie('authenticated');
        res.json({
            authenticated: false,
            error: 'Not logged in',
        });
    }
});

router.post('/pin', function (req, res, next) {
    if (req?.session?.passport?.user) {
        const topic = req.body.topic;
        db.run(
            'INSERT INTO topics (username, topic) VALUES ($user, $topic)',
            {
                $user: req.session.passport.user.username,
                $topic: topic,
            },
            function (err) {
                if (err) {
                    res.json({
                        error: err,
                    });
                } else {
                    res.json({});
                }
            }
        );
    } else {
        res.clearCookie('authenticated');
        res.json({
            authenticated: false,
            error: 'Not logged in',
        });
    }
});

router.post('/unpin', function (req, res, next) {
    if (req?.session?.passport?.user) {
        const topic = req.body.topic;
        db.run(
            'DELETE FROM topics WHERE username = $user and topic = $topic',
            {
                $user: req.session.passport.user.username,
                $topic: topic,
            },
            function (err) {
                if (err) {
                    res.json({
                        error: err,
                    });
                } else {
                    res.json({});
                }
            }
        );
    } else {
        res.clearCookie('authenticated');
        res.json({
            authenticated: false,
            error: 'Not logged in',
        });
    }
});

module.exports = router;
