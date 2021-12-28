var passport = require('passport');
var Strategy = require('passport-local');
var crypto = require('crypto');
var db = require('../db');

module.exports = function () {
    // Configure the local strategy for use by Passport.
    //
    // The local strategy requires a `verify` function which receives the credentials
    // (`email` and `password`) submitted by the user.  The function must verify
    // that the password is correct and then invoke `cb` with a user object, which
    // will be set at `req.user` in route handlers after authentication.
    passport.use(
        new Strategy({ usernameField: 'email' }, function (email, password, cb) {
            db.get(
                'SELECT rowid AS id, * FROM users WHERE email = ?',
                [email],
                function (err, row) {
                    if (err) {
                        return cb(err);
                    }
                    if (!row) {
                        return cb(null, false, {
                            message: 'Incorrect email and/or password.',
                        });
                    }

                    crypto.pbkdf2(
                        password,
                        row.salt,
                        310000,
                        32,
                        'sha256',
                        function (err, hashedPassword) {
                            if (err) {
                                return cb(err);
                            }
                            if (
                                !crypto.timingSafeEqual(
                                    row.hashed_password,
                                    hashedPassword
                                )
                            ) {
                                return cb(null, false, {
                                    message: 'Incorrect email and/or password.',
                                });
                            }

                            var user = {
                                id: row.id.toString(),
                                email: row.email,
                                displayName: row.name,
                            };
                            return cb(null, user);
                        }
                    );
                }
            );
        })
    );

    // Configure Passport authenticated session persistence.
    //
    // In order to restore authentication state across HTTP requests, Passport needs
    // to serialize users into and deserialize users out of the session.  The
    // typical implementation of this is as simple as supplying the user ID when
    // serializing, and querying the user record by ID from the database when
    // deserializing.
    passport.serializeUser(function (user, cb) {
        process.nextTick(function () {
            cb(null, { id: user.id, email: user.email, displayName: user.displayName });
        });
    });

    passport.deserializeUser(function (user, cb) {
        process.nextTick(function () {
            return cb(null, user);
        });
    });
    // passport.serializeUser(function (user, done) {
    //     done(null, user.id);
    // });

    // passport.deserializeUser(function (id, done) {
    //     User.findById(id, function (err, user) {
    //         done(err, user);
    //     });
    // });
};
