const db = require("../config/connection");
const { Cake } = require("../models");

const CakeData = require("./cakeData.json");

db.once("open", async () => {
  // clean database
  await Cake.deleteMany({});

  // bulk create each model
  const cakes = await Cake.insertMany(CakeData);

  for (newCake of cakes) {
    // randomly add each class to a school
    const tempCake = cakes[Math.floor(Math.random() * cakes.length)];
    tempCake.cakes.push(newCake._id);
    await tempCake.save();
  }

  console.log("all done!");
  process.exit(0);
});
