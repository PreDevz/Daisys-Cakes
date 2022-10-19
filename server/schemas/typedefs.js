const { gql } = require("apollo-server-express");

module.exports = typeDefs;

const typeDefs = gql`
  type Admin {
    _id: ID
    Adminname: String
    email: String
  }
  type Auth {
    token: ID!
    admin: Admin
  }
  type Query {
    me: Admin
  }
  type Mutation {
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;