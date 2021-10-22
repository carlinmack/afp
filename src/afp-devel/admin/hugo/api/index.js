const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./post.js');
const app = express();

var cookieParser = require('cookie-parser');
var passport = require('passport');
const bodyParser = require('body-parser');

var authRouter = require('./routes/auth');

require('./boot/db')();
require('./boot/auth')();

// app.use('/graphql', graphqlHTTP({ schema: schema.schema, graphiql: true }));
// URL prefix: /api/
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(cookieParser());
app.use(passport.initialize());
// app.use(passport.session());
app.use(passport.authenticate('session'));

app.use('/graphql', graphqlHTTP({ schema: schema.schema }));
app.use('/auth', authRouter);


// app.get('/', function (req, res) {
//   res.send('Hello World');
// });

app.listen(4000, () => {
  console.log('Node server running at http://localhost:4000.');
});
