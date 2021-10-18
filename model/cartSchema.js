const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  Product: String,
  User: String,
  "Product Qty": Number,
  "Base Price": Number,
  "Sell Price": Number,
  "Total Price": Number,
});

module.exports = mongoose.model("carts", cartSchema);
