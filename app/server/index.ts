import { ApolloServer } from "apollo-server";
import { typeDefs } from "./src/schema";
import { resolvers } from "./src/resolver/resolver";

const port = process.env.PORT || 5000;

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen(port, () => {
    console.log(`GraphQL is ready at http://localhost:${port}/`);
});