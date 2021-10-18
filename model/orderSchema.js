const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  "User ID": String,
  "Total items": Number,
  Products: String,
  "Billing Address": String,
  "Shipping Address": String,
  "Transaction Status": String,
  "Payment mode": String,
  "Payment Status": String,
  "Order Status": String,
});

const order = mongoose.model("orders", orderSchema);
module.exports = order;
