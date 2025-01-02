const express = require("express");
const morgan = require("morgan");
const app = express();

const deliveryRoutes = require("./routes/delivery.routes");
const errorHandling = require("./middlewares/errorHandling");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));
app.use(morgan("combined"));

app.use("/delivery", deliveryRoutes);

app.use(errorHandling);

module.exports = app;
