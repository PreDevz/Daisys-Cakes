import React, { useRef } from "react";
import Swal from "sweetalert";
import emailjs from "@emailjs/browser";
// Styles 
import "./contact.scss";

// need client create account with emailjs
const serviceId = "";
const templateId = "";
const publicKey = "";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    // Checks if name is empty
    if (form.current[0].value === "") {
      Swal.fire("Please enter your name!");
      return;
    }

    // Checks if email is empty
    if (form.current[1].value === "") {
      Swal.fire("Please enter your email address!");
      return;
    }

    // Checks if message is empty
    if (form.current[2].value === "") {
      Swal.fire("Please give us a text message!");
      return;
    }

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
        console.log("Sent!");
        Swal.fire("Success!", "Message was successfully sent!", "success");
      },
      (error) => {
        console.log(error.text);
        Swal.fire("Uh oh!", "An unexpected error occurred.", "error");
      }
    );
  };

  return (
    // need to move this anchor to navbar contact
    <><a href="#popup1">Contact</a><div id="popup1" className="popup-overlay">
      <div className="popup">
        <h2>Contact Us!</h2>
        <a className="close" href="#">&times;</a>
        <div className="content">
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div></>
  );
};

export default Contact;