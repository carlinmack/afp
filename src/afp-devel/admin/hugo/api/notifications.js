var express = require('express');

var db = require('./db.js');
var router = express.Router();

// const createNotificationsTable = () => {
//     const query = `CREATE TABLE IF NOT EXISTS notifications (date TEXT DEFAULT (datetime('now')), message TEXT, link TEXT, user TEXT, seen INT DEFAULT 0)`;
//     return db.run(query);
// };

const alterCommentsTable = () => {
    db.get(
        'select count(*) as count from pragma_table_info("comments") where name = "seen"',
        function (err, row) {
            if (err) {
                reject('not found');
            }
            if (row.count == 0) {
                const query = `ALTER TABLE comments ADD COLUMN seen INT DEFAULT 0`;
                return db.run(query);
            }
        }
    );
};

//call function to init the notification table
// createNotificationsTable();
alterCommentsTable();

// URL prefix: /api/notifications/
router.get('/', function (req, res, next) {
    if (req?.session?.passport?.user) {
        // db.all(
        //     'select ROWID, date, message, link, seen from notifications WHERE user = ?',
        //     [req.session.passport.user.email],
        //     function (err, rows) {
        //         if (err) {
        //             return next(err);
        //         }
        //         res.json({
        //             authenticated: true,
        //             notifications: rows,
        //         });
        //     }
        // );
        db.all(
            'select comments.id as rowid, created as date, ' +
                'comments.author || " replied to your comment" as message, ' +
                'threads.uri || "#isso-" || comments.id as link, seen from threads ' +
                'join comments on threads.id = comments.tid where comments.parent ' +
                'in (select id from comments where website like "%=' +
                req.session.passport.user.username +
                '") and website not like "%=' +
                req.session.passport.user.username +
                '"',
            function (err, rows) {
                if (err) {
                    return next(err);
                }
                res.json({
                    authenticated: true,
                    notifications: rows,
                    username: req.session.passport.user,
                });
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

router.post('/read', function (req, res, next) {
    if (req?.session?.passport?.user) {
        const rows = req.body.rows;
        db.run(
            `UPDATE comments SET seen = 1 WHERE id in (${rows
                .map(() => {
                    return '?';
                })
                .join(',')})`,
            ...rows,
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

router.get('/unread', function (req, res, next) {
    if (req?.session?.passport?.user) {
        db.get(
            'select ' +
                '(select max(id) from comments) as mostRecent, ' +
                '(select count(*) from comments where website like "%=' +
                req.session.passport.user.username +
                '") as totalComments,' +
                '(select count(*) from threads ' +
                'join comments on threads.id = comments.tid where comments.parent ' +
                'in (select id from comments where website like "%=' +
                req.session.passport.user.username +
                '") and website not like "%=' +
                req.session.passport.user.username +
                '" and seen = 0) as unread;',
            function (err, row) {
                if (err) {
                    res.json({
                        authenticated: true,
                        ...err,
                    });
                } else {
                    res.json({
                        authenticated: true,
                        ...row,
                    });
                }
            }
        );
    } else {
        res.clearCookie('authenticated');
        res.json({
            authenticated: false,
            hasComments: false,
            error: 'Not logged in',
        });
    }
});

module.exports = router;
