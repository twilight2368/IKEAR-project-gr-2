const express = require("express");
const errorHandling = require("./middlewares/errorHandling");
const app = express();

const userRoutes = require("./routes/user.routes");
const inventoryRoutes = require("./routes/inventory.routes");
const orderRoutes = require("./routes/order.routes");

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

module.exports = app;
