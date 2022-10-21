import React, { useState } from "react";
// Styles
import "../sass/components/navbarComp.scss";
import Logo from "../assets/daisylogo.png";

function Navbar() {
  // State for whether the hamburger menu is active
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <nav className="navbar">
      <a href="#" className="nav-branding">
        <img id="logo" src={Logo} alt="Daisy's Cakes Logo" />
      </a>

      <ul className={`nav-menu ${isActive ? "" : "active"}`}>
        <li className="nav-item">
          <a onClick={handleToggle} href="#" className="nav-link">
            HOME
          </a>
        </li>
        <li className="nav-item">
          <a onClick={handleToggle} href="#" className="nav-link">
            ABOUT
          </a>
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
          <a onClick={handleToggle} href="#" className="nav-link">
            CONTACT
          </a>
        </li>
        <li className="nav-item">
          <a onClick={handleToggle} href="#" className="nav-link">
            LOG IN
          </a>
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
