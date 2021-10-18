const express = require("express");
const Router = express.Router();

const {
  post_cart,
  get_cart,
  delete_cart,
  update_cart,
  get_cart_ALL,
} = require("../controller/cartController");

Router.get("/carts/:id", get_cart);
Router.get("/carts", get_cart_ALL);
Router.post("/carts", post_cart);
Router.delete("/carts/:id", delete_cart);
Router.put("/carts/:id", update_cart);

module.exports = Router;
