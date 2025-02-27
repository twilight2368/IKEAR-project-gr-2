const clc = require("cli-color");

function errorHandling(err, req, res, next) {
  console.log("====================================");
  console.log(clc.red("Something went wrong"));
  console.log("====================================");
  console.log("====================================");
  console.error(err);
  console.log("====================================");

  res.status(500).json({
    message: "Something went wrong",
  });
}

module.exports = errorHandling;
