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
                Here at Daisy&#39;s Cakes we believe that every cake should be
                as unique as the person it&#39;s made for. Cakes symbolize
                celebration and they bring friends and families together -
                because of this, we believe that every single cake should be
                baked with love.
                <br />
                <br />
                For any questions, comments, or inquiries please contact us at
                cakesbydaisysalcido@gmail.com or send us a DM on our Instagram
                page.
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

          <h2>Meet Daisy!</h2>
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
                Daisy Salcido is the owner of Daisy&#39;s Cakes and is also the
                designer and creator of every cake showcased. She graduated from
                Le Cordon Bleu in 2010 and since then has been creating
                beautiful, professional cakes from her home.
                <br />
                <br />
                With over a decade of professional experience, Daisy has worked
                with hundreds of clients to create and deliver unforgettable
                cakes and memories. From birthdays, to graduations, to weddings,
                and everywhere in-between, Daisy can come up with whatever theme
                or design you like!
              </p>
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
