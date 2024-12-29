const express = require("express");
const errorHandling = require("./middlewares/errorHandling");
const app = express();

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

app.use(errorHandling);

module.exports = app;
