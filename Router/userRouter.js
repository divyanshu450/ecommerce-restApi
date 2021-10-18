const express = require("express");
const Router = express.Router();

const {
  post_user,
  get_all_user,
  get_user_byID,
  update_user_byID,
  delete_user_byID,
} = require("../controller/userController");

//const abc = require("../controller/userController");
//abc.get_user_byID

Router.get("/users/:id", get_user_byID);
Router.get("/users", get_all_user);
Router.post("/users", post_user);
Router.delete("/users/:id", delete_user_byID);
Router.put("/users/:id", update_user_byID);

module.exports = Router;
