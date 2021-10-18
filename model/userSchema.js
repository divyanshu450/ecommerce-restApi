const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  First_name: String,
  Last_name: String,
  email: String,
  role: String,
  profile: String,
});

const user = mongoose.model("user", userSchema);
module.exports = user;
