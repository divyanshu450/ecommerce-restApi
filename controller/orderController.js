const orderSchema = require("../model/orderSchema");

const get_order = async (req, res) => {
  const { id } = req.params;
  const order = await orderSchema.find({ _id: id });
  res.send(order);
};

const get_order_ALL = async (req, res) => {
  const order = await orderSchema.find(req.query);
  res.send(order);
};

const post_order = async (req, res) => {
  try {
    const data = await orderSchema.insertMany(req.body);
    // await data.save()
    console.log(data);
    res.status(201).send(data);
  } catch (error) {
    console.log(error);
  }
};

const delete_order = async (req, res) => {
  const { id } = req.params;
  const deldata = await orderSchema.deleteOne({ _id: id }, req.body);
  console.log(deldata);
  res.send(deldata);
};

const update_order = async (req, res) => {
  const { id } = req.params;
  const updata = await orderSchema.updateOne({ _id: id });
  console.log(updata);
  res.send(updata);
};

module.exports = {
  delete_order,
  get_order,
  update_order,
  post_order,
  get_order_ALL,
};
