const tagSchema = require("../model/tagSchema");

const get_tag = async (req, res) => {
  const { id } = req.params;
  const data = await tagSchema.find({ _id: id });
  console.log(data);
  res.send(data);
};
const get_tag_All = async (req, res) => {
  const data = await tagSchema.find(req.query);
  console.log(data);
  res.send(data);
};

const post_tag = async (req, res) => {
  try {
    const data = new tagSchema(req.body);
    await data.save();
    res.send(data);
    res.status(201);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const delete_tag = async (req, res) => {
  const { id } = req.params;
  const data = await tagSchema.deleteOne({ _id: id });
  console.log(data);
  res.send(data);
};

const update_tag = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const updata = await tagSchema.updateOne({ _id: id }, data);
  res.send(updata);
};

module.exports = { update_tag, delete_tag, post_tag, get_tag, get_tag_All };
