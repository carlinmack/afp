var express = require('express');
var passport = require('passport');
var crypto = require('crypto');
var db = require('../db');

var router = express.Router();

// URL prefix: /api/auth/
router.post(
    '/login/password',
    // passport.authenticate('local', {
    //     successRedirect: '/',
    //     failureRedirect: '/login',
    //     failureMessage: true,
    // })
    passport.authenticate('local'),
    function (req, res) {
        res.cookie('authenticated', true);
        res.redirect('/account');
    }
);

router.get('/logout', function (req, res, next) {
    // console.log(req.user)
    req.logOut();
    req.session.destroy(function (err) {
        res.clearCookie('authenticated');
        res.redirect('/account'); //Inside a callback… bulletproof!
    });
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
    if (req?.session?.passport?.user) {
        res.json({
            authenticated: true,
            user: req.session.passport.user,
            also: req.user
        });
    } else {
        res.json({
            authenticated: false,
            error: 'Not logged in',
        });
    }
    // res.json({se
    //     a: !!req.isAuthenticated,
    //     b: !!req.isAuthenticated(),
    //     c: !!req.user,
    //     e: !!req.session,
    //     f: !!req.session.passport.user,
    // });
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
