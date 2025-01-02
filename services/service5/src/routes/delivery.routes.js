const express = require("express");
const router = express.Router();

const {
  getDelivery,
  getDeliverByOrder,
  createDelivery,
  updateDelivery,
  deleteDelivery,
} = require("../controllers/delivery.controller");

router.get("/", getDelivery);
router.get("/order/:id", getDeliverByOrder);
router.post("/", createDelivery);
router.put("/:id", updateDelivery);
router.delete("/:id", deleteDelivery);

module.exports = router;
