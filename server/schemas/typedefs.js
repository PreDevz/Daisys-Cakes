const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Admin {
    _id: ID!
    username: String!
    email: String!
  }
  type Auth {
    token: ID!
    user: Admin
  }
  type Query {
    me: Admin
  }
  type Mutation {
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;