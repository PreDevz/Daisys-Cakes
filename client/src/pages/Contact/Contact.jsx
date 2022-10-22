import React from "react";

// Styles 
import "./contact.scss";

/* Importing the motion library from framer-motion. */
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.23 }}
      exit={{ opacity: 0 }}
      id="contactPage"
    >
      Contact
    </motion.div>
  );
};

export default Contact;