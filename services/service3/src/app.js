const express = require("express");
const errorHandling = require("./middlewares/errorHandling");
const app = express();
const morgan = require("morgan");

const cartRouter = require("./routes/cart.routes");
const favRouter = require("./routes/fav.routes");
const reviewRouter = require("./routes/review.routes");
const userRouter = require("./routes/user.routes");
const itemRouter = require("./routes/item.routes");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(morgan("dev"));
app.use(morgan("combined"));

app.get("/", (req, res, next) => {
  res.json({
    message: "Hello world",
  });
});

app.use("/cart", cartRouter);

app.use("/fav", favRouter);

app.use("/review", reviewRouter);

app.use("/user", userRouter);

app.use("/item", itemRouter);

app.use(errorHandling);

module.exports = app;
