import React, { useState } from 'react';

// Component 
import { Navbar, Footer } from "../components";
// Pages 
import { Home, About, Contact, Admin } from "./index";

const DaisyCakesContainer = () => {

  const [currentPage, setCurrentPage] = useState('Home');

  // check which page the user is currently on 
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home currentPage={currentPage} handlePageChange={handlePageChange} />; 
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />

      {renderPage()}

      <Footer currentPage={currentPage} handlePageChange={handlePageChange} />
    </>

  )
}

export default DaisyCakesContainer;