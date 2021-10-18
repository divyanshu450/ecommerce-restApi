const express = require("express");
const mongoose = require("mongoose");

const userRouter = require("./Router/userRouter");
const roleRouter = require("./Router/roleRouter");
const productsRouter = require("./Router/productsRouter");
const ordersRouter = require("./Router/orderRouter");
const tagsRouter = require("./Router/tagRouter");
const cartRouter = require("./Router/cartRouter");
const categoryRouter = require("./Router/categoryRouter");

const app = express();
const port = 3000;

mongoose
  .connect("mongodb://127.0.0.1:27017/node-express")
  .then(() => console.log("DB connected"))
  .catch((error) => console.log(error));

app.use(express.json());
app.get("/", (req, res) => {
  console.log("Divyanshu");
  res.send("Welcome to Valuebound");
});

app.use(userRouter);
app.use(roleRouter);
app.use(productsRouter);
app.use(ordersRouter);
app.use(tagsRouter);
app.use(cartRouter);
app.use(categoryRouter);

app.get("/roles", (req, res) => {
  console.log("roles");
  res.send("Welcome to roles");
});

app.get("/products", (req, res) => {
  console.log("products");
  res.send("Welcome to Products");
});

app.get("/tags", (req, res) => {
  console.log("tags");
  res.send("Welcome to Tags");
});

app.get("/orders", (req, res) => {
  console.log("orders");
  res.send("welcome to Orders");
});

app.get("/carts", (req, res) => {
  console.log("carts");
});

app.get("/categories", (req, res) => {
  console.log("Categories");
  res.send("Welcome to Categories");
});

app.listen(port, () => {
  console.log(`https://localhost:${port}`);
});
