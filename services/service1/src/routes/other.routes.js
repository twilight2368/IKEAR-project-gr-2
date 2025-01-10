const express = require("express");
const router = express.Router();
const countryList = require("../models/data/country.json");
const ROLES = require("../constants/roles/role");
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

router.get("/roles", (req, res, next) => {
  try {
    res.json({
      message: "Successful",
      data: Object.values(ROLES.ROLES),
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
