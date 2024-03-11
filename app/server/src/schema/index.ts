import { gql } from "apollo-server-express";

export const typeDefs = gql`
    type User {
        Id: ID!
        FullName: String
        PhoneNumber: String
        Email: String
        Password: String
    }
    
    type PopularDestination {
        Place: String
        Url: String
    }

    type FAQ {
        Id: String
        Question: String
        Answer: String
    }

    # ROOT TYPE

    type Query {
        getUsers: [User]
        getPopularDestinations: [PopularDestination]
        getFAQs: [FAQ]
    }

    type Mutation {
        createUser(Id: ID!, FullName: String!, PhoneNumber: String!, Email: String!, Password: String!): User
    }
`

