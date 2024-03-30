import { gql, useMutation } from "@apollo/client";

// Define mutation
export const CREATE_USER = gql`
  mutation CreateUser(
    $fullName: String!
    $phoneNumber: String!
    $email: String!
    $password: String!
  ) {
    createUser(
      FullName: $fullName
      PhoneNumber: $phoneNumber
      Email: $email
      Password: $password
    ) {
      email
      fullName
      id
      password
      phoneNumber
    }
  }
`;
