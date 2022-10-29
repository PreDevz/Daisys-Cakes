/* Importing the gql function from the apollo client. */
import { gql } from "@apollo/client";


/* This is a GraphQL query for LOGIN_USER. */
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      Auth: token
      user {
        _id
        username
      }
    }
  }
`;