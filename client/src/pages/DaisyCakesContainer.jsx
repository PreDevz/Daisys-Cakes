import React from "react";

// Component
import { Navbar, Footer } from "../components";

// Router
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Pages
import { Home, About, Contact, Admin } from "./index";

/* A library that allows for animations to be added to the page. */
import { AnimatePresence } from "framer-motion";

const DaisyCakesContainer = () => {
  const location = useLocation();
  return (
    // <React.StrictMode>
    <AnimatePresence>
      <Navbar />
      <main>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
      <Footer />
    </AnimatePresence>
    // </React.StrictMode>
  );
};

export default DaisyCakesContainer;
