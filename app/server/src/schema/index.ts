import { gql } from "apollo-server-express";

export const typeDefs = gql`
    type User {
        FullName: ID
        PhoneNumber: String
        Email: String
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
`

