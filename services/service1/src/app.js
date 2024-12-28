const express = require("express");
const morgan = require("morgan");
const app = express();
const authRouter = require("./routes/auth.routes");
const errorHandling = require("./middlewares/errorHandling");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));
app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.json({
    message: "Hello World",
  });
});

app.use("/auth", authRouter);


app.use(errorHandling);

module.exports = app;
