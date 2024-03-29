import { ApolloServer } from "apollo-server";
import schemas from "./src/modules/schemas";
import resolvers from "./src/modules/resolvers";
const port = process.env.PORT || 5000;

const server = new ApolloServer({
    typeDefs: schemas,
    resolvers
});

server.listen(port, () => {
    console.log(`GraphQL is ready at http://localhost:${port}/`);
});