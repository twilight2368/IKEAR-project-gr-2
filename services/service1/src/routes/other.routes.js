const express = require("express");
const router = express.Router();
const countryList = require("../models/data/country.json");
router.get("/country", (req, res, next) => {
  try {
    res.json({
      message: "Successful",
      data: countryList,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
