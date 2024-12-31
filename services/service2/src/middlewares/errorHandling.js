function errorHandling(err, req, res, next) {
  console.log("====================================");
  console.error(err);
  console.log("====================================");
  res.status(500).json({
    message: "Something went wrong !!!",
  });
}

module.exports = errorHandling;
