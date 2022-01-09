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
    function (req, res) {
        passport.authenticate('local', function (err, user, info) {
            if (err) {
                return next(err);
            }
            if (!user) {
                res.cookie('warnMessage', info.message, { maxAge: 30000 });
                return res.redirect('/login');
            }
            req.logIn(user, function (err) {
                if (err) {
                    return next(err);
                }
                res.cookie('authenticated', true);
                if (req.body.next) {
                    res.redirect(req.body.next);
                } else {
                    res.redirect('/account');
                }
            });
        })(req, res);
    }
);

router.get('/logout', function (req, res, next) {
    req.logOut();
    req.session.destroy(function (err) {
        res.clearCookie('authenticated');
        res.redirect('/'); //Inside a callback… bulletproof!
    });
});

router.post('/signup', function (req, res, next) {
    if (req.body.password == req.body.confirm) {
        db.get(
            'SELECT rowid AS id, * FROM users WHERE email = ?',
            [req.body.email],
            function (err, row) {
                if (err) {
                    return cb(err);
                }
                if (row) {
                    res.cookie('warnMessage', 'Email has already been registered', {
                        maxAge: 30000,
                    });
                    return res.redirect('/signup');
                }

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
                            'INSERT INTO users (email, hashed_password, salt, name) VALUES (?, ?, ?, ?)',
                            [req.body.email, hashedPassword, salt, req.body.name],
                            function (err) {
                                if (err) {
                                    return next(err);
                                }

                                var user = {
                                    id: this.lastID.toString(),
                                    email: req.body.email,
                                    displayName: req.body.name,
                                };
                                req.login(user, function (err) {
                                    if (err) {
                                        return next(err);
                                    }
                                    res.redirect('/account/create');
                                });
                            }
                        );
                    }
                );
            }
        );
    } else {
        res.cookie('warnMessage', 'Passwords did not match', { maxAge: 30000 });
        return res.redirect('/signup');
    }
});

// router.post('/changePassword', function (req, res, next) {
//     if (
//         req.body.current != req.body.password &&
//         req.body.password == req.body.confirm
//     ) {
//         db.get(
//             'SELECT salt FROM users WHERE email = ?  ',
//             [req.session.passport.user.email],
//             function (err, row) {
//                 if (err) {
//                     return next(err);
//                 }
//                 crypto.pbkdf2(
//                     req.body.current,
//                     row.salt,
//                     310000,
//                     32,
//                     'sha256',
//                     function (err, hashedPassword) {
//                         if (err) {
//                             return next(err);
//                         }

//                         db.get(
//                             'SELECT 1 FROM users WHERE email = ? AND hashed_password = ?',
//                             [req.session.passport.user.email, hashedPassword],
//                             function (err, row) {
//                                 if (err) {
//                                     return next(err);
//                                 }

//                                 if (row == undefined) {
//                                     res.send('Wrong current password');
//                                 }
//                                 var salt = crypto.randomBytes(16);
//                                 crypto.pbkdf2(
//                                     req.body.password,
//                                     salt,
//                                     310000,
//                                     32,
//                                     'sha256',
//                                     function (err, hashedPassword) {
//                                         if (err) {
//                                             return next(err);
//                                         }

//                                         db.run(
//                                             'UPDATE users SET hashed_password = ?, salt = ? WHERE email = ?',
//                                             [
//                                                 hashedPassword,
//                                                 salt,
//                                                 req.session.passport.user.email,
//                                             ],
//                                             function (err) {
//                                                 if (err) {
//                                                     return next(err);
//                                                 }

//                                                 var user = {
//                                                     id: this.lastID.toString(),
//                                                     email: req.body.email,
//                                                     displayName: req.body.name,
//                                                 };
//                                                 req.login(user, function (err) {
//                                                     if (err) {
//                                                         return next(err);
//                                                     }
//                                                     res.redirect('/account');
//                                                 });
//                                             }
//                                         );
//                                     }
//                                 );
//                             }
//                         );
//                     }
//                 );
//             }
//         );
//     } else {
//         res.send('Passwords did not match');
//     }
// });

router.post('/updateSettings', function (req, res, next) {
    Promise.all([
        new Promise((resolve, reject) => {
            if (!req.body.name || req.body.name.length == 0) {
                resolve();
            } else {
                db.run(
                    'UPDATE users SET name = $name WHERE email = $email and name != $name',
                    {
                        $name: req.body.name,
                        $email: req.session.passport.user.email,
                    },
                    function (err) {
                        if (err) {
                            reject(err);
                        }
                        if (this.changes == 1) {
                            resolve('name');
                        }
                    }
                );
            }
        }),
    ]).then(function (responses) {
        responses = responses.filter((x) => x !== undefined);
        if (responses.length) {
            var message = responses.join(', ') + ' updated';
            res.cookie('warnMessage', message, {
                maxAge: 30000,
            });
        }
        res.redirect('/account');
    });
});

router.get('/logged-in', function (req, res, next) {
    if (req?.session?.passport?.user) {
        db.get(
            'select name, email from users WHERE email = ?',
            [req.session.passport.user.email],
            function (err, row) {
                if (err) {
                    return next(err);
                }
                res.json({
                    authenticated: true,
                    user: req.session.passport.user,
                    db: row,
                    also: req.user,
                });
            }
        );
        // res.json({
        //     authenticated: true,
        //     user: req.session.passport.user,
        //     also: req.user,
        // });
    } else {
        res.clearCookie('authenticated');
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

router.get('/notifications', function (req, res, next) {
    if (req?.session?.passport?.user) {
        db.all(
            'select date, message, link, seen from notifications WHERE user = ?',
            [req.session.passport.user.email],
            function (err, rows) {
                if (err) {
                    return next(err);
                }
                res.json({
                    authenticated: true,
                    notifications: rows,
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

module.exports = router;
