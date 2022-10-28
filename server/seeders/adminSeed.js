// import .env 
require("dotenv").config();

// exporting admin info with .env vars
module.exports = [
  {
    "username": process.env.ADMIN_USERNAME,
    "email": process.env.ADMIN_EMAIL,
    "password": process.env.ADMIN_PASSWORD
  }
];