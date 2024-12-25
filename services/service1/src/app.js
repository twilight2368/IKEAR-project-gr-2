const express = require("express");
const morgan = require("morgan");
const app = express();
const router = require("./routes/auth.routes");
const errorHandling = require("./middlewares/errorHandling");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));
app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/auth", router);

app.use(errorHandling);

module.exports = app;
