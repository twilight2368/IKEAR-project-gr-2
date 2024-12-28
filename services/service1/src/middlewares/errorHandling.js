const errorMessages = require("../constants/messages/errors/messages.json");

function errorHandling(err, req, res, next) {
  console.log("====================================");
  console.error(err);
  console.log("====================================");
  res.status(500).json({
    message: errorMessages.error.somethingWentWrong,
  });
}

module.exports = errorHandling;
