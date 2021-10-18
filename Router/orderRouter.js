const express = require("express");
const Router = express.Router();

const {
  post_order,
  get_order,
  delete_order,
  update_order,
  get_order_ALL,
} = require("../controller/orderController");

Router.get("/orders/:id", get_order);
Router.get("/orders", get_order_ALL);
Router.post("/orders", post_order);
Router.delete("/orders/:id", delete_order);
Router.put("/orders/:id", update_order);

module.exports = Router;
