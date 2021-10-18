const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  Name: String,
  Slug: String,
  image: Array,
  Description: String,
});

module.exports = mongoose.model("categories", categorySchema);
