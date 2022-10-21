// Core File 
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

// Components 
import DaisyCakesContainer from "./pages/DaisyCakesContainer";

// Styles 
import "./sass/main.scss";

function App() {
  return (
    <Router>
      <DaisyCakesContainer />
    </Router>
  );
}

export default App;
