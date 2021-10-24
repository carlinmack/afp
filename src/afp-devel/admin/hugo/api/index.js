const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./post.js');
const app = express();

var passport = require('passport');

var authRouter = require('./routes/auth');

require('./boot/db')();
require('./boot/auth')();

// URL prefix: /api/
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(passport.initialize());
app.use(
    require('express-session')({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: false,
    })
);
app.use(function (req, res, next) {
    var msgs = req.session.messages || [];
    res.locals.messages = msgs;
    res.locals.hasMessages = !!msgs.length;
    req.session.messages = [];
    next();
});
app.use(passport.authenticate('session'));

// app.use('/graphql', graphqlHTTP({ schema: schema.schema, graphiql: true }));
app.use('/graphql', graphqlHTTP({ schema: schema.schema }));
app.use('/auth', authRouter);


// app.get('/', function (req, res) {
//   res.send('Hello World');
// });

app.listen(4000, () => {
  console.log('Node server running at http://localhost:4000.');
});
