import React from "react";

// Images 
import { cuteGhost, diaMuertos, darkRose} from "../imgs";

// Styles
import "../sass/components/featComp.scss";

const Featured = () => {
  return (
    <section className="featured-section">

      <div className="container">

        <h2>Featured</h2>
        <h3>Featured Cakes of the Month: October</h3>

        <div className="featured-page-1">
          <div>
            <img className="featured-img" src={diaMuertos} />
            <p>Dia De Los Muertos</p>
          </div>
          <div>
            <img className="featured-img" src={darkRose} />
            <p>Dark Rose</p>
          </div>
          <div>
            <img className="featured-img" src={cuteGhost} />
            <p>Cute Ghost</p>
          </div>
        </div>
        
      </div>

    </section>
  );
};

export default Featured;
