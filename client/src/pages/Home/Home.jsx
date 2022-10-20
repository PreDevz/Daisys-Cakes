import React from "react";

// Components 
import { Hero, About, Featured } from "../../components";

// Styles 
import "./home.scss";

const Home = () => {
  return (
    <>
      <Hero />
      <Featured />
      <About />
    </>
  );
};

export default Home;