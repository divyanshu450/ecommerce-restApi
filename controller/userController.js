const userSchema = require("../model/userSchema");

const post_user = async (req, res) => {
  try {
    const newUser = new userSchema(req.body);
    await newUser.save();
    res.send(newUser);
    res.status(201);
    console.log(newUser);
  } catch (error) {
    console.log(error);
  }
};
//req-->body, param, header, status
const get_all_user = async (req, res) => {
  const alluser = await userSchema.find(req.query);
  res.send(alluser);
};

const get_user_byID = async (req, res) => {
  const { id } = req.params;
  const userData = await userSchema.find({ _id: id });
  res.send(userData);
};

const delete_user_byID = async (req, res) => {
  const { id } = req.params;
  const deldata = await userSchema.deleteOne({ _id: id });
  console.log(deldata);
  res.send(deldata);
};

const update_user_byID = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const updateData = await userSchema.findByIdAndUpdate({ _id: id }, data);
  res.send(updateData);
};

module.exports = {
  post_user,
  get_all_user,
  get_user_byID,
  delete_user_byID,
  update_user_byID,
};
