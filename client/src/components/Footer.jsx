import React from "react";
import footerImg from "../imgs/homePageCakes/text-logo.png";

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
              <a href="">Learn More</a>
            </li>
            <li>
              <a href="https://www.instagram.com/daisycakes87/?next=%2Fdaisycakes87%2F">Instagram</a>
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

      </div>
    </footer>
  );
};

export default Footer;