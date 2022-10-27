const db = require("../config/connection");
const { Cake, Admin } = require("../models");
const CakeData = require("./cakeData.json");

const AdminData = require("./adminSeed");

db.once("open", async () => {
  // clean database
  await Cake.deleteMany({});
  await Admin.deleteMany({});

  // bulk create each model
  const cakes = await Cake.insertMany(CakeData);
  const admins = await Admin.insertMany(AdminData);

  console.log("all done!");
  process.exit(0);
});
