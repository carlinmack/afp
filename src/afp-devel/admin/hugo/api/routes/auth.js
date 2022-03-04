var express = require('express');
var passport = require('passport');
var crypto = require('crypto');
var db = require('../db');

const multer = require('multer');
const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, '/var/www/html/images/user/');
        },
        filename: function (req, file, cb) {
            // TODO should be username instead
            cb(null, req.session.passport.user.id);
        },
    }),
});

// import { fileTypeFromFile } from 'file-type';

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
    if (req.body.password != req.body.confirm) {
        res.cookie('warnMessage', 'Passwords did not match', { maxAge: 30000 });
        return res.redirect('/signup');
    }
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
                        'INSERT INTO users (email, hashed_password, salt, username) VALUES (?, ?, ?, ?)',
                        [req.body.email, hashedPassword, salt, req.body.username],
                        function (err) {
                            if (err) {
                                return next(err);
                            }

                            var user = {
                                id: this.lastID,
                                email: req.body.email,
                                username: req.body.username,
                            };
                            res.cookie('authenticated', true);
                            req.logIn(user, function (err) {
                                if (err) {
                                    return next(err);
                                }
                                
                                if (req.body.next) {
                                    res.redirect(
                                        '/account/create?next=' + req.body.next
                                    );
                                } else {
                                    res.redirect('/account/create');
                                }
                            });
                        }
                    );
                }
            );
        }
    );
});

function updatePassword(req, res, next, resolve, reject) {
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
                'UPDATE users SET hashed_password = ?, salt = ? WHERE email = ?',
                [hashedPassword, salt, req.session.passport.user.email],
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
                        resolve('password');
                    });
                }
            );
        }
    );
}

async function updateNonEssential(req, type) {
    return new Promise((resolve, reject) => {
        if (!req.body[type] || req.body[type].length == 0) {
            resolve();
        } else {
            const query =
                'UPDATE users SET ' +
                type +
                ' = $type WHERE email = $email and (' +
                type +
                ' is null or ' +
                type +
                ' != $type)';
            db.run(
                query,
                {
                    $type: req.body[type],
                    $email: req.session.passport.user.email,
                },
                function (err) {
                    if (err) {
                        reject(err);
                    }
                    console.log(query)
                    console.log(req.body[type]);
                    console.log(this.changes);
                    if (this.changes == 1) {
                        if (type == "name") {
                            console.log(req.user);
                            resolve("display name");
                        }
                        resolve(type);
                    }
                    resolve();
                }
            );
        }
    });
}

router.post('/updateSettings', function (req, res, next) {
    // console.log('req.body');
    // console.log(req.body);
    // console.log('req.session.passport.user');
    // console.log(req.session.passport.user);
    if (req?.session?.passport?.user) {
        Promise.all([
            updateNonEssential(req, 'name'),
            updateNonEssential(req, 'description'),
            updateNonEssential(req, 'website'),
            updateNonEssential(req, 'affiliation'),
            //     new Promise((resolve, reject) => {
            //         console.log(
            //             req.body.current.length,
            //             req.body.password.length,
            //             req.body.confirm.length
            //         );
            //         if (req.body.current.length == 0 || req.body.password.length == 0) {
            //             resolve();
            //         }
            //         if (
            //             req.body.current != req.body.password &&
            //             req.body.password == req.body.confirm
            //         ) {
            //             db.get(
            //                 'SELECT salt FROM users WHERE email = ?  ',
            //                 [req.session.passport.user.email],
            //                 function (err, row) {
            //                     if (err) {
            //                         return next(err);
            //                     }
            //                     crypto.pbkdf2(
            //                         req.body.current,
            //                         row.salt,
            //                         310000,
            //                         32,
            //                         'sha256',
            //                         function (err, hashedPassword) {
            //                             if (err) {
            //                                 return next(err);
            //                             }

            //                             db.get(
            //                                 'SELECT 1 FROM users WHERE email = ? AND hashed_password = ?',
            //                                 [
            //                                     req.session.passport.user.email,
            //                                     hashedPassword,
            //                                 ],
            //                                 function (err, row) {
            //                                     if (err) {
            //                                         return next(err);
            //                                     }

            //                                     if (row == undefined) {
            //                                         res.send('Wrong current password');
            //                                     }

            //                                     updatePassword(
            //                                         req,
            //                                         res,
            //                                         next,
            //                                         resolve,
            //                                         reject
            //                                     );
            //                                 }
            //                             );
            //                         }
            //                     );
            //                 }
            //             );
            //         } else {
            //             res.send('Passwords did not match');
            //         }
            //     }),
        ]).then(function (responses) {
            responses = responses.filter((x) => x !== undefined);
            if (responses.length) {
                var message = responses.join(', ') + ' updated';
                if (req.body.next) {
                    message += " on user profile"
                }
                res.cookie('successMessage', message, {
                    maxAge: 30000,
                });
            }
            
            if (req.body.next) {
                res.redirect(req.body.next);
            } else {
                res.redirect('/account');
            }
        });
    } else {
        res.clearCookie('authenticated');
        res.cookie('warnMessage', 'Log in to update your settings', { maxAge: 30000 });
        return res.redirect('/login');
    }
});

router.get('/logged-in', function (req, res, next) {
    if (req?.session?.passport?.user) {
        db.get(
            'select username, name, email, image, affiliation, description, website from users WHERE email = ?',
            [req.session.passport.user.email],
            function (err, row) {
                if (err) {
                    return next(err);
                }
                res.json({
                    authenticated: true,
                    user: req.session.passport.user,
                    db: row,
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
    // res.json({se
    //     a: !!req.isAuthenticated,
    //     b: !!req.isAuthenticated(),
    //     c: !!req.user,
    //     e: !!req.session,
    //     f: !!req.session.passport.user,
    // });
});

router.post('/upload', upload.single('avatar'), function (req, res) {
    // req.file is the name of your file in the form above, here 'uploaded_file'
    // req.body will hold the text fields, if there were any
    console.log(req.file, req.body);
    // console.log(await fileTypeFromFile(req.file.path));

    // check file is a valid type
    // if it is
    //      insert name into db with user
    // else
    //      delete it

    if (req?.session?.passport?.user) {
        db.run(
            'UPDATE users SET image = $image WHERE email = $email',
            {
                $image: req.file.filename,
                $email: req.session.passport.user.email,
            },
            function (err) {
                if (err) {
                    res.json({
                        error: err,
                    });
                }
                if (this.changes == 1) {
                    res.cookie('successMessage', 'Picture updated', {
                        maxAge: 30000,
                    });
                }
                res.redirect('/account');
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

router.post('/getUser', function (req, res) {
    const user = req.body.user;

    db.get(
        'SELECT name, image, website, affiliation, description FROM users WHERE username = $user',
        {
            $user: user,
        },
        function (err, row) {
            if (err) {
                return res.json(err);
            }
            res.json(row);
        }
    );
});

module.exports = router;
