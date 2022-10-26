import React from "react";

// Styles
import "./about.scss";

/* Importing the motion library from framer-motion. */
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.23 }}
      exit={{ opacity: 0 }}
      id="aboutPage"
      className="page"
    >
      <div className="container">
        <h1>About</h1>

        <div className="about-container">
          <h2>Mission Statement</h2>
          <section className="about-page-s1 about-page-s">
            <div className="about-page-s1-left">
              <div>
                Our Mission at <span>Daisy&#39;s Cakes</span>...
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci saepe nesciunt soluta praesentium veritatis cumque
                similique dolorem, nulla vero quasi corrupti quidem voluptate
                ullam magni magnam velit officiis deserunt cupiditate?
                <br />
                <br />m ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci saepe nesciunt soluta praesentium veritatis cumque
                similique dolorem, nulla vero quasi corrupti quidem volupdipisci
                saepe nesciunt soluta praesentium veritatis cumque similidipisci
                saepe nesciunt soluta praesentium veritatis cumque similidipisci
                saepe nesciunt soluta praesentium veritatis cumque similique
                dolorem, nulla vero quasi corrupti quidem volupdipisc!
              </p>
            </div>

            <div className="about-page-s1-right">
              <img
                src="https://img.freepik.com/free-photo/cupcakes_74190-20.jpg?w=1380&t=st=1666295331~exp=1666295931~hmac=f4102f636a2440539a96c612eaa9b479c79dc718d521ba1d90baac95a242e95a"
                alt=""
                className="about-page-img"
                title="Hello"
              />
            </div>
          </section>

          <h2>Daisy&#39;s Cakes</h2>
          <section className="about-page-s2 about-page-s">
            <div className="about-page-s2-right">
              <img
                src="https://img.freepik.com/free-photo/ingredients-cook-recipe-pink_144627-24731.jpg?w=1380&t=st=1666295389~exp=1666295989~hmac=fef1648b96b0a201051762a81feeade32e4a74f83b079a8273fbd10f23377ecb"
                alt=""
                className="about-page-img"
              />
            </div>

            <div className="about-page-s2-left">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci saepe nesciunt soluta praesentium veritatis cumque
                similique dolorem, nulla vero quasi corrupti quidem voluptate
                ullam magni magnam velit officiis deserunt cupiditate?
                <br />
                <br />
                onsectetur adipisicing elit. Adipisci saepe nesciunt soluta
                praesentium veritatis cumque similique dolorem, nulla vero quasi
                corrupti quidem voluptatesaepe nesciunt soluta praesentium
                veritatis csaepe nesciunt soluta praesentium veritatis c ullam
                magn
              </p>
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default About;