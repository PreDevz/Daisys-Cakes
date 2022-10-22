import React from "react";

// Components 
import { Hero, About, Featured } from "../../components";

// Styles 
import "./home.scss";

const Home = () => {
  return (
    <div id="homePage" className="page">
      <Hero />
      <Featured />
      <About />
    </div>
  );
};

export default Home;