import React from "react";
import heroImg from "../imgs/homePageCakes/hero-2.png";

// Styles
import "../sass/components/heroComp.scss";

const Hero = () => {
  return (
    <div className="hero-section">

      <img className="hero-img" src={heroImg} />
      
    </div>
  );
};

export default Hero;