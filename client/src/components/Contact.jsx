import React, { useRef } from "react";

// Email JS 
import emailjs from "@emailjs/browser";

// Images 
import { brownCake, lavenderCake, greenCake, movingCake, fastCake, sandlotCake, flamingoCake, sweetCake, lavbdayCake } from "../imgs";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";

// Styles
import "../sass/components/contactComp.scss";

// Sweet Alert
import swal from "sweetalert";

// Pull ENV Variables For emailjs
const REACT_APP_SERV_KEY = process.env.REACT_APP_SERV_KEY;
const REACT_APP_FORM_TEMPLATE = process.env.REACT_APP_FORM_TEMPLATE;
const REACT_APP_FORM_PUB_KEY = process.env.REACT_APP_FORM_PUB_KEY;

/* Importing the motion library from framer-motion. */
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Checks if name is empty
    if (form.current[0].value === "") {
      swal({
        text: "Please add your name!",
      });

      return;
    }

    // Checks if email is empty
    if (form.current[1].value === "") {
      swal({
        text: "Please add your email!",
      });

      return;
    }

    // Checks if message is empty
    if (form.current[2].value === "") {
      swal({
        text: "Please give us a message!",
      });

      return;
    }

    // (Temporarily here for testing)
    resetForm();

    emailjs
      .sendForm(
        REACT_APP_SERV_KEY,
        REACT_APP_FORM_TEMPLATE,
        form.current,
        REACT_APP_FORM_PUB_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Sent!");
          swal({
            text: "Message was successfully sent!",
          });

          // Call the Reset Function
          resetForm();
        },
        (error) => {
          console.log(error.text);
          swal({
            text: "Uh oh!, An unexpected error occurred.",
          });
        }
      );
  };

  // Function to reset form
  function resetForm() {
    // after 900ms reset form
    setTimeout(() => {
      // reset name value
      form.current[0].value = "";

      // reset email value
      form.current[1].value = "";

      // reset Message value
      form.current[2].value = "";

      // Close the Form
      window.location.href = "#";
    }, 900);
  }

  return (
    // need to move this anchor to navbar contact
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.23 }}
      exit={{ opacity: 0 }}
    >
      <div className="contact-section">
        <h2 id="contact">Contact</h2>
        <p id="contact-text">
          Thank you for your interest in Daisy&#39;s Cakes where every cake is
          guarenteed to be baked with love. Please click on the button below and
          we&#39;ll get back to you as soon we can!
        </p>
      </div>

      <Swiper
        slidesPerView={5}
        spaceBetween={20}
        breakpoints={{
          175: {
            slidesPerView: 2,
            spaceBetween: 150,
          },
          475: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          820: {
            slidesPerView: 3,
            spaceBetween: 350,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 200,
          },
        }}
        centeredSlides={true}
        freeMode={true}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="featured-img"
            src={lavenderCake}
            alt="Birthday Cake"
            title="Birthday Cake"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="featured-img"
            src={brownCake}
            alt="Anniversary Cake"
            title="Anniversary Cake"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="featured-img"
            src={greenCake}
            alt="Wedding Cake"
            title="Wedding Cake"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="featured-img"
            src={movingCake}
            alt="Moving Cake"
            title="Moving Cake"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="featured-img"
            src={fastCake}
            alt="Two-Fast Cake"
            title="Two-Fast Cake"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="featured-img"
            src={sandlotCake}
            alt="Sandlot Cake"
            title="Sandlot Cake"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="featured-img"
            src={flamingoCake}
            alt="Flamingo Cake"
            title="Flamingo Cake"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="featured-img"
            src={sweetCake}
            alt="Sweet Cake"
            title="Sweet Cake"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="featured-img"
            src={lavbdayCake}
            alt="Bday Cake"
            title="Bday Cake"
          />
        </SwiperSlide>
      </Swiper>

      <div className="inquire-button-container">
        <a href="#popup1" id="inquireBtn">
          Contact Us
        </a>
      </div>
      <div id="popup1" className="popup-overlay">
        <div className="popup">
          <h2>Contact Us!</h2>
          <a className="close" href="#">
            &times;
          </a>
          <div className="content">
            {/* Contact Form  */}
            <form ref={form} onSubmit={sendEmail}>
              {/* Form Name */}
              <label>Name</label>
              <input type="name" name="user_name" placeholder="name" />
              {/* Form Email */}
              <label>Email</label>
              <input
                type="email"
                name="user_email"
                placeholder="email@email.com"
              />
              {/* Form Message */}
              <label>Message</label>
              <textarea
                name="message"
                maxLength="750"
                placeholder="Add your message..."
              />
              {/* Form Send Button */}
              <input className="contact-send" type="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
