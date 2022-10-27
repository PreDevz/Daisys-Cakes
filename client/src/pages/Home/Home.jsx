import React from "react";

// Components 
import { Hero, About, Featured, Tips } from "../../components";

// Styles 
import "./home.scss";

/* Importing the framer-motion library. */
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.23 }}
      exit={{ opacity: 0 }}
      id="homePage"
      className="page"
    >
      <Hero />
      <Featured />
      <About />
      <Tips />
    </motion.div>
  );
};

export default Home;