const express = require("express");
const Router = express.Router();

const {
  post_role,
  get_role,
  update_role,
  delete_role,
  get_role_ALL,
} = require("../controller/roleController");

Router.get("/roles/:id", get_role);
Router.get("/roles/", get_role_ALL);
Router.post("/roles/", post_role);
Router.delete("/roles/:id", delete_role);
Router.put("/roles/:id", update_role);

module.exports = Router;
