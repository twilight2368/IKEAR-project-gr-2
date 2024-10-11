const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(morgan("dev"));
app.use(morgan("combined"));
app.use(helmet())



app.listen(8080, () => {

});
