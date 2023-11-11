import { gql } from "apollo-server-express";

export const typeDefs = gql`
    type Book {
        id: ID
        name: String,
        genre: String
    }

    # ROOT TYPE

    type Query {
        books: [Book]
    }
`

