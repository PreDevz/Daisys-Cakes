import React from "react";
import aboutImg from "../imgs/homePageCakes/cupcakes.jpg";

// Styles
import "../sass/components/aboutComp.scss";

const About = () => {
  return (
    <section className="about-section">
      <h2>About</h2>
      <div className="image-wrapper">
        <img className="about-img" src={aboutImg} />
        <p>
          Daisy&#39;s Cakes specializes in making custom cakes for all
          occasions. Take a look at our gallery on instagram for more! For any
          questions and inquires please fill out the inquire form in our contact page.
        </p>
      </div>
    </section>
  );
};

export default About;
