import React from "react";

// Images
import aboutImg from "../imgs/homePageCakes/favicon.png";

// Styles
import "../sass/components/aboutComp.scss";

// Link 
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <h2>About</h2>
        <div className="image-wrapper">
          <img className="about-img" src={aboutImg} />
          <p>
            Daisy&#39;s cakes has been serving the Greater Los Angeles area
            since 2010 and we are always happy to work with you! For a full
            showcase of our previously completed cakes, check out our Instagram
            or learn more by clicking the button below!
            <br />
            <br />
            <div className="about-btn-container">
              <Link to="/about">
                <a className="about-btn">Learn More</a>
              </Link>
            </div>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
