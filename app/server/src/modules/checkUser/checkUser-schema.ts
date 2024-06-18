import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type UserLogin {
    phoneNumber: String
    password: String
  }
  
  input CheckUserInput {
    phoneNumber: String!
    password: String!
  }

  type Mutation {
    checkUser(checkUserInput: CheckUserInput): UserLogin
  }
`;
