import React from "react";

// Components 
import { Hero, About, Featured } from "../../components";

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
    >

      <Hero />
      {/* So the page stylings don't effect the hero section  */}
      <div className="page">
        <Featured />
        <About />
      </div>

    </motion.div>
  );
};

export default Home;