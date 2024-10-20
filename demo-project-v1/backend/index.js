const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const clc = require("cli-color");
const app = express();

app.use(cors());

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(morgan("dev"));
app.use(morgan("combined"));
app.use(helmet());

app.get("/", (req, res, next) => {
  res.json({
    message: "Hello world",
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server is running on: ", clc.blue(`http://localhost:${PORT}`));
});
