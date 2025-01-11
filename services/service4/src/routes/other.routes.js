const express = require("express");
const router = express.Router();

const DELIVERY_TYPE = require("../constants/delivery_type");
const PAYMENT_TYPE = require("../constants/payment_type");

router.get("/delivery-types", (req, res) => {
  res.json({ data: Object.values(DELIVERY_TYPE) });
});

router.get("/payment-types", (req, res) => {
  res.json({ data: Object.values(PAYMENT_TYPE) });
});

module.exports = router;
