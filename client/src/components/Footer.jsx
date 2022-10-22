import React from "react";

// Styles 
import "../sass/components/footerComp.scss";

import Logo from "../imgs/ex-cake-logo.png";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
      
        {/* Logo  */}
        <img className="footer-logo" src={Logo} alt="" />

        {/* Daisy's Cakes */}
        <div className="footer-sec">
          <h4>Daisy&#39;s Cakes</h4>
          <ul className="footer-ul">
            <li>
              <a href="">Learn More</a>
            </li>
            <li>
              <a href="">Instagram</a>
            </li>
            <li>
              <a href="">herEmail@gmail.com</a>
            </li>
          </ul>
        </div>

        {/* Page  */}
        <div className="footer-sec">
          <h4>Page</h4>
          <ul className="footer-ul">
            <li>
              <a href="">Featured</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>

        {/* Extra  */}
        <div className="footer-sec">
          <h4>Extra</h4>
          <ul className="footer-ul">
            <li>
              <a href="">list item</a>
            </li>
            <li>
              <a href="">list item</a>
            </li>
            <li>
              <a href="">list item</a>
            </li>
          </ul>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;