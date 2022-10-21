const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Admin {
    _id: ID!
    username: String!
    email: String!
    title: String
    savedCake: [Cake]
  }
  type Cake {
    cakeId: String!
    title: String!
    description: String
    cakeUrl: [String]
    savedCake: [Cake]
  }
  type Auth {
    token: ID!
    user: Admin
  }
  input CakeInput {
    title: String!
    description: String
    cakeUrl: [String]
  }
  type Query {
    me: Admin
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addedCake(title: String!, description: String, cakeUrl: String): Admin
    removeCake(cakeId: String!): Admin
    addCake(input: CakeInput): Admin
  }
`;

module.exports = typeDefs;