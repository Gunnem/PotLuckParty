const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const potluckitemSchema = new Schema({
  item: { type: String, required: true },
  person: { type: String, required: true },
  notes: String,
  date: { type: Date, default: Date.now }
});

const Potluckitem = mongoose.model("Potluckitem", potluckitemSchema);

module.exports = Potluckitem;
