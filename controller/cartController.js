const cartSchema = require("../model/cartSchema");

const get_cart = async (req, res) => {
  const { id } = req.params;
  const cart = await cartSchema.find({ _id: id });
  res.send(cart);
};

const get_cart_ALL = async (req, res) => {
  const cart = await cartSchema.find(req.query);
  res.send(cart);
};

const post_cart = async (req, res) => {
  try {
    const data = await cartSchema.insertMany(req.body);
    //await data.save();
    res.send(data);
    res.status(201);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const update_cart = async (req, res) => {
  const { id } = req.params;
  const updata = await cartSchema.updateOne({ _id: id }, req.body);
  console.log(updata);
  res.send(updata);
};

const delete_cart = async (req, res) => {
  const { id } = req.params;
  const data = await cartSchema.deleteOne({ _id: id });
  console.log(data);
  res.send(data);
};

module.exports = {
  get_cart,
  post_cart,
  delete_cart,
  update_cart,
  get_cart_ALL,
};
