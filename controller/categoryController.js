const categorySchema = require("../model/categorySchema");

const get_category = async (req, res) => {
  const { id } = req.params;
  const data = await categorySchema.find({ _id: id });
  res.send(data);
};

const get_category_ALL = async (req, res) => {
  const data = await categorySchema.find(req.query);
  res.send(data);
};

const post_category = async (req, res) => {
  try {
    const data = new categorySchema(req.body);
    await data.save();
    res.send(data);
    res.status(201);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const update_category = async (req, res) => {
  const { id } = req.params;
  const data = await categorySchema.updateOne({ _id: id }, req.body);
  console.log(data);
  res.send(data);
};

const delete_category = async (req, res) => {
  const { id } = req.params;
  const data = await categorySchema.deleteOne({ _id: id });
  console.log(data);
  res.send(data);
};

module.exports = {
  get_category,
  update_category,
  delete_category,
  post_category,
  get_category_ALL,
};
