const express = require("express");
const Router = express.Router();

const {
  get_product,
  update_product,
  delete_product,
  post_product,
  get_product_ALL,
} = require("../controller/productsController");

Router.get("/products/:id", get_product);
Router.get("/products", get_product_ALL);
Router.post("/products", post_product);
Router.delete("/products/:id", delete_product);
Router.put("/products/:id", update_product);

module.exports = Router;
