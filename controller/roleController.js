const roleSchema = require("../model/roleSchema");

const post_role = async (req, res) => {
  try {
    const newrole = new roleSchema(req.body);
    await newrole.save();
    res.send(newrole);
    res.status(200);
  } catch (error) {
    console.log(error);
  }
};

const get_role = async (req, res) => {
  const { id } = req.params;
  const role = await roleSchema.find({ _id: id });
  res.send(role);
};
const get_role_ALL = async (req, res) => {
  const allrole = await roleSchema.find(req.query);
  res.send(allrole);
};

const delete_role = async (req, res) => {
  const { id } = req.params;
  const deldata = await roleSchema.deleteOne({ _id: id });
  console.log(deldata);
  res.send(deldata);
};

const update_role = async (req, res) => {
  const { id } = req.params;
  const updateData = await roleSchema.updateOne({ _id: id }, req.body);
  console.log(updateData);
  res.send(updateData);
};

module.exports = {
  update_role,
  delete_role,
  get_role,
  post_role,
  get_role_ALL,
};
