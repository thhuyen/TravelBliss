import { gql } from "apollo-server-express";

export const typeDefs = gql`
    type User {
        fullName: ID
        phoneNumber: String
        email: String
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

