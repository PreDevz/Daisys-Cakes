import React, { useState } from "react";
import { Link } from "react-router-dom";

// Styles
import "../sass/components/navbarComp.scss";
import Logo from "../imgs/homePageCakes/text-logo-cake-clear.png";

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
            HOME
          </Link>
        </li>
        <li className="nav-item">
          <Link onClick={handleToggle} to="/about" className="nav-link">
            ABOUT
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
            INSTAGRAM
          </a>
        </li>
        <li className="nav-item">
          <Link onClick={handleToggle} to="/contact" className="nav-link">
            CONTACT
          </Link>
        </li>
        <li className="nav-item">
          <Link onClick={handleToggle} to="/admin" className="nav-link">
            LOG IN
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
