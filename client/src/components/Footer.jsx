import React from "react";

// Images 
import footerImg from "../imgs/homePageCakes/text-logo.png";

// Link 
import { Link } from "react-router-dom";

// Styles
import "../sass/components/footerComp.scss";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        {/* Logo  */}
        <img className="footer-logo" src={footerImg} alt="" />

        {/* Daisy's Cakes */}
        <div className="footer-sec">
          <h4>Daisy&#39;s Cakes</h4>
          <ul className="footer-ul">
            <li>
              <Link to="/about">Learn more</Link>
            </li>
            <li>
              <a href="https://www.instagram.com/daisycakes87/?next=%2Fdaisycakes87%2F">
                Instagram
              </a>
            </li>
            <li>
              <a href="mailto:cakesbydaisysalcido@gmail.com">
                cakesbydaisysalcido@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Page  */}
        <div className="footer-sec">
          <h4>Page</h4>
          <ul className="footer-ul">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
