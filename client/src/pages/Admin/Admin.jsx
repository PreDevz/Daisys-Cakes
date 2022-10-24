import React from "react";

// Styles
import "./admin.scss";

/* Importing the motion library from framer-motion. */
import { motion } from "framer-motion";

const Admin = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.23 }}
      exit={{ opacity: 0 }}
      id="adminPage"
    >
      Admin
    </motion.div>
  );
};

export default Admin;
