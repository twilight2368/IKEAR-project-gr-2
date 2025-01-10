const express = require("express");
const errorHandling = require("./middlewares/errorHandling");
const app = express();

const userRoutes = require("./routes/user.routes");
const inventoryRoutes = require("./routes/inventory.routes");
const orderRoutes = require("./routes/order.routes");
const { consumeFromExchange } = require("./utils/mq");
const UserModel = require("./models/schemas/User");
const ItemModel = require("./models/schemas/Item");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res, next) => {
  res.json({
    message: "Hello world",
  });
});

app.use("/users", userRoutes);
app.use("/inventory", inventoryRoutes);
app.use("/orders", orderRoutes);

app.use(errorHandling);

consumeFromExchange("user", async (message) => {
  const data = JSON.parse(message);
  console.log("====================================");
  console.log(data);
  console.log("====================================");
  try {
    const newUser = new UserModel(data.data);

    await newUser.save();
  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
  }
});

consumeFromExchange("product", async (message) => {
  const data = JSON.parse(message);
  console.log("====================================");
  console.log(data);
  console.log("====================================");
  try {
    const newItem = new ItemModel(data.data);
    await newItem.save();
  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
  }
});

module.exports = app;
