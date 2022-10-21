import React from "react";

// Component
import { Navbar, Footer } from "../components";

// Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import { Home, About, Contact, Admin } from "./index";

const DaisyCakesContainer = () => {
  return (
    <React.StrictMode>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
      <Footer />
    </React.StrictMode>
  );
};

export default DaisyCakesContainer;
