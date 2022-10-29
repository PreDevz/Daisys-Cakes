import React, { useState } from "react";

// Image 
import Logo from "../imgs/homePageCakes/daisylogo.png";

// Styles
import "../sass/components/navbarComp.scss";

// Link 
import { Link } from "react-router-dom";

function Navbar() {
  // State for whether the hamburger menu is active
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="nav-branding">
        <img id="logo" src={Logo} alt="Daisy's Cakes Logo" />
      </Link>

      <ul className={`nav-menu ${isActive ? "" : "active"}`}>
        <li className="nav-item">
          <Link onClick={handleToggle} to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link onClick={handleToggle} to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li className="nav-item">
          <a
            onClick={handleToggle}
            href="https://www.instagram.com/daisycakes87"
            target="_blank"
            rel="noreferrer"
            className="nav-link"
          >
            Instagram
          </a>
        </li>
        <li className="nav-item">
          <Link onClick={handleToggle} to="/login" className="nav-link">
            Log In
          </Link>
        </li>
      </ul>

      <div
        className={`hamburger ${isActive ? "" : "active"}`}
        onClick={handleToggle}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
}

export default Navbar;
