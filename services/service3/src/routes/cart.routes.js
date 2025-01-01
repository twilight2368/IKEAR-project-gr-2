const express = require("express");
const router = express.Router();

const {
  getCart,
  createCart,
  updateCart,
  deleteCart,
} = require("../controllers/cart.controller");

router.get("/:id", getCart);
router.post("/", createCart);
router.put("/:id", updateCart);
router.delete("/:id", deleteCart);

module.exports = router;
