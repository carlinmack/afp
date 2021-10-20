const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./post.js');
const app = express();

// app.use('/graphql', graphqlHTTP({ schema: schema.schema, graphiql: true }));
app.use('/graphql', graphqlHTTP({ schema: schema.schema }));

// app.get('/', function (req, res) {
//   res.send('Hello World');
// });

app.listen(4000, () => {
  console.log('GraphQL server running at http://localhost:4000.');
});
