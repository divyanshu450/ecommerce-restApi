const productSchema = require("../model/productsSchema");

const get_product = async (req, res) => {
  const { id } = req.params;
  const productdData = await productSchema.find({ _id: id });
  res.send(productdData);
};

const get_product_ALL = async (req, res) => {
  const productdData = await productSchema.find(req.query);
  res.send(productdData);
};

const post_product = async (req, res) => {
  try {
    const newproduct = await productSchema.insertMany(req.body);
    //await newproduct.save();
    res.send(newproduct);
    res.status(201);
    console.log(newproduct);
  } catch (error) {
    console.log(error);
  }
};

const delete_product = async (req, res) => {
  const { id } = req.params;
  const del_product = await productSchema.deleteOne({ _id: id });
  console.log(del_product);
  res.send(del_product);
};

const update_product = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const upproduct = await productSchema.updateOne({ _id: id }, data);
  console.log(upproduct);
  res.send(upproduct);
};

module.exports = {
  get_product,
  update_product,
  delete_product,
  post_product,
  get_product_ALL,
};
