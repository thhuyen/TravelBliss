import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type User {
    id: String
    fullName: String
    phoneNumber: String
    email: String
    password: String
  }

  input GetUserInput {
    id: String
  }

  type Query {
    getUser(getUserInput: GetUserInput): User
  }
`;
