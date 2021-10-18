const express = require("express");
const Router = express.Router();

const {
  get_tag,
  post_tag,
  delete_tag,
  update_tag,
  get_tag_All,
} = require("../controller/tagController");

Router.get("/tags/:id", get_tag);
Router.get("/tags", get_tag_All);
Router.post("/tags", post_tag);
Router.put("/tags/:id", update_tag);
Router.delete("/tags/:id", delete_tag);

module.exports = Router;
