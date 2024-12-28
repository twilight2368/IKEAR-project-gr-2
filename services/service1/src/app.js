const express = require("express");
const morgan = require("morgan");
const app = express();

const authRouter = require("./routes/auth.routes");
const storeRouter = require("./routes/store.routes");
const employeeRouter = require("./routes/employee.routes");
const adminRouter = require("./routes/admin.routes");
const userRouter = require("./routes/user.routes");

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
app.use("/store", storeRouter);
app.use("/admin", adminRouter);
app.use("/user", userRouter);
app.use("/employee", employeeRouter);

app.use(errorHandling);

module.exports = app;
