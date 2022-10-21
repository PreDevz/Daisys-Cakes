import React, { useState } from "react";

// Component
import { Navbar, Footer } from "../components";

// Pages
import { Home, About, Contact, Admin } from "./index";

const DaisyCakesContainer = () => {
  const [currentPage, setCurrentPage] = useState("About");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render. Defaults to Home if an error occurs.
  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Admin") {
      return <Admin />;
    }
    return <Home />;
  };

  // Sets the States
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <React.StrictMode>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />

      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}

      <Footer currentPage={currentPage} handlePageChange={handlePageChange} />
    </React.StrictMode>
  );
};

export default DaisyCakesContainer;
