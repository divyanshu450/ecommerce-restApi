const mongoose = require("mongoose");

const roleSchema = mongoose.Schema({
  Name: String,
  Slug: String,
});

const role = mongoose.model("roles", roleSchema);
module.exports = role;
