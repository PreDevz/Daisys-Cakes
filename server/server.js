/* Importing the express module. */
const express = require("express");

/* Importing the ApolloServer from the apollo-server-express package. */
const { ApolloServer } = require("apollo-server-express");

/* A node module that allows you to work with file and directory paths. */
const path = require("path");

/* Importing the authMiddleware function from the auth.js file. */
const { authMiddleware } = require("./utils/auth");

/* Importing the typeDefs and resolvers from the schemas.js file. */
const { typeDefs, resolvers } = require("./schemas");

/* Importing the connection to the database. */
const db = require("./config/connection");

/* If there is a port defined in the environment, use that. If there is not, use 3001. */
const PORT = process.env.PORT || 3001;

/* Creating an instance of the express module. */
const app = express();

/* This is creating a new instance of the ApolloServer class. The ApolloServer class takes in an object as an argument. 
The object has three properties: typeDefs, resolvers, and context. */
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

/* This is middleware that is parsing the request body. */
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/* This is middleware that is serving up the static files for the React app. */
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

/* This is setting '/' as the home path */
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});


/* Create a new instance of an Apollo server with the GraphQL schema */
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
  });
};

/* Call the async function to start the server */
startApolloServer(typeDefs, resolvers);