var db = require('../db');


module.exports = function() {

  db.serialize(function() {
    db.run(
        'CREATE TABLE users (username TEXT UNIQUE, email TEXT UNIQUE, \
    hashed_password BLOB, salt BLOB, name TEXT, image TEXT, affiliation TEXT, \
    website TEXT, description TEXT);)'
    );
  });

  //db.close();

};
