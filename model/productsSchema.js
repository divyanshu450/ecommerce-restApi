const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  Name: String,
  Thumbnail: String,
  "Product Gallery": String,
  Description: String,
  "Base Price": Number,
  "Sell Price": Number,
  "Category Name": String,
  Tags: String,
  "Additional Information": String,
});

const product = mongoose.model("products", productSchema);
module.exports = product;
