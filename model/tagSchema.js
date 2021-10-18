const mongoose = require("mongoose");

const tagSchema = mongoose.Schema({
  Name: String,
  slug: String,
});

const tag = mongoose.model("tags", tagSchema);
module.exports = tag;
