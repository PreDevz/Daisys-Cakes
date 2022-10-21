import React from "react";
import cuteGhost from "../imgs/homePageCakes/featured3.jpg";
import diaMuertos from "../imgs/homePageCakes/featured2.jpg";
import darkRose from "../imgs/homePageCakes/featured1.jpg";

// Styles 
import "../sass/components/featComp.scss";

const Featured = () => {
  return (
    <section className="featured-section">
      <h2>Featured</h2>
      <p>October&#39;s Featured Cakes!</p>

      <div className="featured-page-1">
        <img className="featured-img" src={cuteGhost} />
        <img className="featured-img" src={diaMuertos} />
        <img className="featured-img" src={darkRose} />
      </div>

    </section>
  );
};

export default Featured;