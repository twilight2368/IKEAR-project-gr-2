const express = require("express");
const morgan = require("morgan");
const errorHandling = require("./middlewares/errorHandling");

const inventoryRoutes = require("./routes/inventory.routes");
const itemRoutes = require("./routes/item.routes");
const otherRoutes = require("./routes/other.routes");
const { consumeFromQueue } = require("./utils/mq");
const StoreModel = require("./models/schemas/Store");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.json({
    message: "Hello World",
  });
});

app.use("/inventory", inventoryRoutes);
app.use("/item", itemRoutes);
app.use("/other", otherRoutes);

app.use(errorHandling);

consumeFromQueue("store", async (message) => {
  const data = JSON.parse(message);
  // console.log("====================================");
  // console.log(data);
  // console.log("====================================");
  try {
    const newStore = new StoreModel(data.data);
    await newStore.save();
  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
  }
});
module.exports = app;
