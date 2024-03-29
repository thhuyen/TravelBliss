import { ApolloServer } from "apollo-server";
import schemas from "./src/module/schemas";
import resolvers from "./src/module/resolvers";
const port = process.env.PORT || 5000;

const server = new ApolloServer({
    typeDefs: schemas,
    resolvers
});

server.listen(port, () => {
    console.log(`GraphQL is ready at http://localhost:${port}/`);
});