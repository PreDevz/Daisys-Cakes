import React from 'react';

// Components 
import { Hero, About, Featured } from "../../components";

// Styles 
import "./home.css";

const Home = ({ currentPage, handlePageChange }) => {
  return (
    <>
      <Hero />
      <Featured />
      <About />
    </>
  )
}

export default Home;