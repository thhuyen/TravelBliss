// import express from "express";
// import {ApolloServer} from "apollo-server";

// const typeDefs = null;
// const resolvers = null;

// const server = new ApolloServer({
//     typeDefs,
//     resolvers
// });

// server.listen().then(({url}) => {
//     console.log(`Server is ready at ${url}`)
// })
import express from "express";
const graphql = require("express-graphql").graphqlHTTP;

const app = express();
const port = process.env.PORT || 8080;

app.use("/", graphql({
    schema: null, // TODO: Implement GraphQL schema
}));
app.listen(port, () => {
    console.log(`GraphQL API listening on http://localhost:${port}/`);
});