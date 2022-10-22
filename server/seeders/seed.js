const db = require("../config/connection");
const { Cake } = require("../models");

const CakeData = require("./cakeData.json");

db.once("open", async () => {
  // clean database
  await Cake.deleteMany({});

  // bulk create each model
  const cakes = await Cake.insertMany(CakeData);

  console.log("all done!");
  process.exit(0);
});
