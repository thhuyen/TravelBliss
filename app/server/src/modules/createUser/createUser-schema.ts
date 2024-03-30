import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type User {
    id: String
    fullName: String
    phoneNumber: String
    email: String
    password: String
  }
  
  input CreateUserInput {
    fullName: String!
    phoneNumber: String!
    email: String!
    password: String!
  }

  type Mutation {
    createUser(createUserInput: CreateUserInput): User
  }
`;
