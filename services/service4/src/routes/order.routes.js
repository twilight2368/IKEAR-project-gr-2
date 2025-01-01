const {
  createOrder,
  getAllOrders,
  getAllOrdersByStore,
  getAllOrdersByUser,
} = require("../controllers/order.controller");

const express = require("express");
const router = express.Router();

router.get("/orders", getAllOrders);
router.get("/orders/store/:storeId", getAllOrdersByStore);
router.get("/orders/user/:userId", getAllOrdersByUser);
router.post("/order", createOrder);

module.exports = router;