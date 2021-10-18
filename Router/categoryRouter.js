const express = require("express");

const Router = express.Router();

const {
  get_category,
  post_category,
  update_category,
  delete_category,
  get_category_ALL,
} = require("../controller/categoryController");

Router.get("/categories/:id", get_category);
Router.get("/categories", get_category_ALL);
Router.post("/categories", post_category);
Router.put("/categories/:id", update_category);
Router.delete("/categories/:id", delete_category);

module.exports = Router;
