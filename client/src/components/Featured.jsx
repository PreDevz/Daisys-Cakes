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
        <h3>Featured Cakes of the Month: December</h3>

        <div className="featured-page-1">
         <div>
            <img
              className="featured-img"
              src="https://i.imgur.com/x58ymAo.jpg"
            />
            <p>Sports Mix</p>
          </div>
          <div>
            <img
              className="featured-img"
              src="https://i.imgur.com/1ooriCN.jpg"
            />
            <p>Fortnite Birthday</p>
          </div>
          <div>
            <img
              className="featured-img"
              src="https://i.imgur.com/MSKKhRU.jpg"
            />
            <p>My Neighbor Totoro</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
