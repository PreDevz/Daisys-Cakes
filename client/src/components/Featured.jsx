import React from "react";

// Images
import { cuteGhost, diaMuertos, darkRose } from "../imgs";

// Styles
import "../sass/components/featComp.scss";

const Featured = () => {
  return (
    <section className="featured-section">
      <div className="container">
        <h2>Featured</h2>
        <h3>Featured Cakes of the Month</h3>

        <div className="featured-page-1">
          <div>
            <img
              className="featured-img"
              src="https://i.imgur.com/277gr9O.jpg"
            />
            <p>Dia De Los Muertos</p>
          </div>
          <div>
            <img
              className="featured-img"
              src="https://i.imgur.com/JJtasCQ.jpg"
            />
            <p>Vintage Cask</p>
          </div>
          <div>
            <img
              className="featured-img"
              src="https://i.imgur.com/iw0XnNg.jpg"
            />
            <p>Sid the Science Kid</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
