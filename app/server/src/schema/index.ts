import { gql } from "apollo-server-express";

export const typeDefs = gql`
    type Book {
        id: ID
        name: String,
        genre: String
    type User {
        FullName: ID
        PhoneNumber: String
        Email: String
    }
    
    type PopularDestination {
        place: String
        url: String
    }

    type FAQ {
        id: String
        question: String
        answer: String
    }

    # ROOT TYPE

    type Query {
        getUsers: [User]
        getPopularDestinations: [PopularDestination]
        getFAQs: [FAQ]
    }
`

