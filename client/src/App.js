// Core File 
import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import { ApolloProvider, InMemoryCache, ApolloClient, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

// Components 
import DaisyCakesContainer from "./pages/DaisyCakesContainer";

// Styles 
import "./sass/main.scss";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <DaisyCakesContainer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
