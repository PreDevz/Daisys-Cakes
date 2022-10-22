import React from "react";

// Styles 
import "../sass/components/footerComp.scss";

const Footer = () => {
  return (
    <footer className="footer-section">
      
      {/* Logo  */}
      <img src="https://drive.google.com/file/d/1Veez7K9P6NfO_99GEbT7ReJJapyZ1Mm-/view?pli=1" alt="" />

      {/* Daisy's Cakes */}
      <ul className="footer-ul">

        <li className="footer-ul-li">
          <a href="">Learn More</a>
        </li>
        <li className="footer-ul-li">
          <a href="">Instagram</a>
        </li>
        <li className="footer-ul-li">
          <a href="">herEmail@gmail.com</a>
        </li>

      </ul>

    </footer>
  );
};

export default Footer;