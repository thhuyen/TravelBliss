import { gql, useMutation } from "@apollo/client";

// Define mutation
export const CREATE_USER = gql`
  mutation CreateUser(
    $id: ID!
    $fullName: String!
    $phoneNumber: String!
    $email: String!
    $password: String!
  ) {
    createUser(
      Id: $id
      FullName: $fullName
      PhoneNumber: $phoneNumber
      Email: $email
      Password: $password
    ) {
      Email
      FullName
      Id
      Password
      PhoneNumber
    }
  }
`;
