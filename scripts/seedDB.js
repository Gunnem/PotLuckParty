const mongoose = require("mongoose");
const db = require("../models");

// This file empties the potluckpartys collection and inserts the potluckpartys below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/potluckparty"
);

const potluckitemSeed = [
  {
    item: "bring something good",
    person: "awesome person",
    notes:
      "don't drink and code!",
    date: new Date(Date.now())
  },


];

db.Potluckitem
  .remove({})
  .then(() => db.Potluckitem.collection.insertMany(potluckitemSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
