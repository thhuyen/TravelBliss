import { gql } from "@apollo/client";

// Define mutation
export const CREATE_USER = gql`
  mutation Mutation($createUserInput: CreateUserInput) {
    createUser(createUserInput: $createUserInput) {
      id
      fullName
      phoneNumber
      email
      password
    }
  }
`;
