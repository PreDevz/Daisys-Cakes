/* Importing the gql function from the apollo-server-express package. */
const { gql } = require("apollo-server-express");

/* Defining the schema for the GraphQL API. */
const typeDefs = gql`
  type Admin {
    _id: ID!
    username: String!
    email: String!
    title: String
    savedCake: [Cake]
  }
  type Cake {
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
    addAdmin(username: String!, email: String!, password: String!): Auth
    addedCake(title: String!, description: String, cakeUrl: String): Admin
    removeCake(title: String!): Admin
    addCake(input: CakeInput): Admin
  }
`;

/* Exporting the typeDefs variable so that it can be imported into other files. */
module.exports = typeDefs;