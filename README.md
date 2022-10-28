# Daisys-Cakes

Full Stack MERN website for local small business "Daisy's Cakes"!

## Description

The purpose of this project was to collaboratively build a real-world, full-stack web application that demonstrates everything we have learned over the last several months in our bootcamp. For a full list of the various libraries, packages, and technologies utilized for this project, please refer to the [Technologies](#technologies) section below.

For this project we decided to partner up with a local business owner in order to build a website for her company, Pop Umai. Because of this, we had multiple meetings with the client and had to take into consideration her ideas and desires for the website. We would then take her ideas and turn them into reality, implementing them on the website.

The live website can be accessed by clicking [here.](https://pop-umai.herokuapp.com/)

## Table of Contents

- [Installation](#installation)
- [Technologies](#technologies)
- [Contribution](#contribution)
- [Requirements](#requirements)
- [Screenshots](#screenshots)
- [Questions](#questions)

## Installation

Please be sure to carefully follow the installation instructions.

1. This app is powered by Node.js and MySQL, as a result, make sure those are properly installed and configured before continuing on.
2. Navigate to the root of this repo and run `npm install` in your console/terminal to download all the necessary npm packages.
3. Create a `.env` file in the root of the repo. Within this file, copy and paste the following:

```md
DB_NAME=pop_db
DB_USER=<user_name>
DB_PASSWORD=<user_password>

ADMIN_NAME=<admin_name>
ADMIN_EMAIL=<admin_email>
ADMIN_PASSWORD=<admin_password>
```

4. Change the value of `DB_USER` and `DB_PASSWORD` to your MySQL user and password respectively. Save these changes.
5. Change the value of the `ADMIN` variables to whatever you want your administrator login for the website to be.
6. Execute `mysql -u root -p` in your console/terminal.
7. Once succesfully logged in, execute `source db/schema.sql` to create database. Exit when finished.
8. In your console/terminal, execute `npm run seed` to seed your newly created database.
9. You are now ready to turn on the server by running `npm start` or `npm run watch` for nodemon (to view changes live).

### Accessing the Administrator Dashboard

The administrator dashboard is hidden and inaccessible by default and can only be accessed by following these instructions (after following the previous installation instructions).

_Note: Administrator dashboard can only be accessed on locally-run version of the website. The deployed version is ready for use for our client so she has her own admin login set up already._

1. Once the server is running, the website is accessible on `http://localhost:3001`.
2. In the url search bar add `/dashboard` to the end of the url. It should look like `http://localhost:3001/dashboard`. Hit enter.
3. You will be redirected to a login page if you are not already logged in.
4. Enter in the admin credentials you created in your `.env` file.
5. Upon successful login, you will be redirected to the admin dashboard where the user can make changes to specific parts of the website.

_Note: After logging in, a session is set to expire within 30 minutes, which afterwards will automatically logout the admin. You can adjust the time(milliseconds) in the root `server.js`_

---

## Technologies

Below is a list of all the technologies we utilized in order to build this website.

### NPM Packages

- [BCrypt](https://www.npmjs.com/package/bcrypt)
- [Connect-Session-Sequelize](https://www.npmjs.com/package/connect-session-sequelize)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Express](https://www.npmjs.com/package/express)
- [Express-Handlebars](https://www.npmjs.com/package/express-handlebars)
- [Express-Session](https://www.npmjs.com/package/express-session)
- [MySQL2](https://www.npmjs.com/package/mysql2)
- [Sequelize](https://www.npmjs.com/package/sequelize)

### Other Technologies (CDNs)

- [Bootstrap](https://getbootstrap.com)
- [EmailJs](https://www.emailjs.com)
- [Sweet Alert](https://sweetalert.js.org)

---

## Contribution

_This section will be deleted later when the project is completed. For now here are some resources we might need_

- Link to Google Drive with [cake images](https://drive.google.com/drive/folders/1Hp05hOxrL5-NDPJ3JWRKqbTdWXYGWr_1?usp=sharing)
- Daisy's [Instagram page](https://www.instagram.com/daisycakes87/?next=%2Fdaisycakes87%2F)
- [SASS / SCSS Documentation](https://sass-lang.com/documentation/)

- Be sure to configure your linter so we have code uniformity. You can also run `npm run lint` from within the `/client` folder or `/server` folder to fix any syntax anamolies!

---

## Requirements

Below are the **objective** project grading requirements as well as a response as to how we utilized different aspects of the website to fulfill these requirements. The **subjective** requirements have been omitted.

- Use Node.js and Express.js to create a RESTful API. ✅

  - Node.js and Express.js used to return information about `events` from MySQL database.

- Use Handlebars.js as the template engine. ✅

- Use MySQL and the Sequelize ORM for the database. ✅

  - Database is generated in and utilizing MySQL.
  - Sequelize is used to create and seed `events` and `admin` tables.

- Have both GET and POST routes for retrieving and adding new data. ✅

  - Navigating to different pages for `GET` requests. Also retrieving all events from database on the "Events" page.
  - Admin login, as well as creating new events on the admin dashboard page are done using `POST` requests.

- Use at least one new library, package, or technology that we haven’t discussed. ✅

  - EmailJs
  - Sweet Alert

- Have a folder structure that meets the MVC paradigm. ✅

- Include authentication (express-session and cookies). ✅

  - Login page on `/dashboard/login`, will only allow access to dashboard page if the admin credentials match to the hashed information in the database.

- Protect API keys and sensitive information with environment variables. ✅

- Be deployed using Heroku (with data). ✅

- Be interactive (i.e., accept and respond to user input). ✅

---

## Screenshots

Below are various screenshots of the website:

<img src="./assets/readme/hero.png"  width=70% height=70%>

<img src="./assets/readme/homepage.png"  width=70% height=70%>

<img src="./assets/readme/events.png"  width=70% height=70%>

<img src="./assets/readme/admin.png"  width=70% height=70%>

<img src="./assets/readme/mobile.png"  width=50% height=50%>

---

## Questions

If you have any questions, please contact any of us below:

### Gilberto Escobedo

Github: [n7-gil](https://github.com/n7-gil)

Email: gilbertoaescobedo@gmail.com

### Christian McIlvenny

Github: [TDGNate](https://github.com/TDGNate)

Email: itsnzte@gmail.com

### Cesar Infante

Github: [Cesar-Infante](https://github.com/Cesar-Infante)

Email: cesar261110@gmail.com

### Anthony Quinones

Github: [TonyQ032](https://github.com/TonyQ032)

Email: anthonyq032@gmail.com

---

Copyright © 2022 Pop Umai - All Rights Reserved
