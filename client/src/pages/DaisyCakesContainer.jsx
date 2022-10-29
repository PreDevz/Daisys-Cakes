import React from "react";

// Components
import { Navbar, Footer } from "../components";

// Router
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Pages
import { Home, About, Login } from "./index";

/* A library that allows for animations to be added to the page. */
import { AnimatePresence } from "framer-motion";

const DaisyCakesContainer = () => {
  const location = useLocation();
  return (
  <React.StrictMode>
    <AnimatePresence>
      <Navbar />
      <main>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </AnimatePresence>
  </React.StrictMode>
  );
};

export default DaisyCakesContainer;
