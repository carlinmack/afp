var express = require('express');
var passport = require('passport');
var crypto = require('crypto');
var db = require('../db');

var router = express.Router();

// URL prefix: /api/auth/
router.get('/login', function (req, res, next) {
    // res.redirect('/login');
    res.send('login');
});

router.post(
    '/login/password',
    // passport.authenticate('local', {
    //     successRedirect: '/',
    //     failureRedirect: '/login',
    //     failureMessage: true,
    // })
    passport.authenticate('local'),
    function (req, res) {
        res.send('Hello ' + req.user.displayName + ' (' + req.user.username + ')');
    }
);

router.get('/logout', function (req, res, next) {
    req.logout();
    res.redirect('/');
});

router.post('/signup', function (req, res, next) {
    var salt = crypto.randomBytes(16);
    crypto.pbkdf2(
        req.body.password,
        salt,
        310000,
        32,
        'sha256',
        function (err, hashedPassword) {
            if (err) {
                return next(err);
            }

            db.run(
                'INSERT INTO users (username, hashed_password, salt, name) VALUES (?, ?, ?, ?)',
                [req.body.username, hashedPassword, salt, req.body.name],
                function (err) {
                    if (err) {
                        return next(err);
                    }

                    var user = {
                        id: this.lastID.toString(),
                        username: req.body.username,
                        displayName: req.body.name,
                    };
                    req.login(user, function (err) {
                        if (err) {
                            return next(err);
                        }
                        res.redirect('/');
                    });
                }
            );
        }
    );
});

router.get('/logged-in', function (req, res, next) {
    res.json({
        a: req.isAuthenticated,
        b: req.isAuthenticated(),
        c: req.user,
        e: req.session,
    });
});

// router.get('/', function (req, res, next) {
//     db.get(
//         'SELECT rowid AS id, username, name FROM users WHERE rowid = ?',
//         [req.user.id],
//         function (err, row) {
//             if (err) {
//                 return next(err);
//             }

//             // TODO: Handle undefined row.

//             var user = {
//                 id: row.id.toString(),
//                 username: row.username,
//                 displayName: row.name,
//             };
//             res.render('profile', { user: user });
//         }
//     );
// });

module.exports = router;
