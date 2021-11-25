const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./post.js');
const app = express();

const passport = require('passport');

app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());

const authRouter = require('./routes/auth');
const pageviews = require('./pageviews.js');

require('./boot/db')();
require('./boot/auth')();

// URL prefix: /api/
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
app.use('/pageviews', pageviews);


// app.get('/', function (req, res) {
//   res.send('Hello World');
// });

app.listen(4000, () => {
  console.log('Node server running at http://localhost:4000.');
});
