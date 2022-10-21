import React, { useState } from "react";

// Component 
import { Navbar, Footer } from "../components";

// Pages 
import { Home, About, Contact, Admin } from "./index";

const DaisyCakesContainer = () => {

  const [currentPage, setCurrentPage] = useState("Home");

  // check which page the user is currently on 
  const renderPage = () => {

    // Change to Home Page 
    if (currentPage === "Home") {
      return <Home currentPage={currentPage} handlePageChange={handlePageChange} />; 
    }

    // Change to About Page 
    if (currentPage === "About") {
      return <About currentPage={currentPage} handlePageChange={handlePageChange} />; 
    }

    // Change to Contact Page 
    if (currentPage === "Contact") {
      return <Contact currentPage={currentPage} handlePageChange={handlePageChange} />; 
    }

    // Change to Admin Page 
    if (currentPage === "Admin") {
      return <Admin currentPage={currentPage} handlePageChange={handlePageChange} />; 
    }
  };

  // Sets the States 
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />

      {renderPage()}

      <Footer currentPage={currentPage} handlePageChange={handlePageChange} />
    </>
  );
};

export default DaisyCakesContainer;