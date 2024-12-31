const express = require("express");
const router = express.Router();

const {
  getAllInventory,
  getInventory,
  createInventory,
  updateInventory,
  deleteInventory,
} = require("../controllers/inventory.controller");

router.get("/", (req, res) => {
  res.json({
    message: "Hello World",
  });
});

router.get("/inventory", getAllInventory);
router.get("/inventory/:id", getInventory);
router.post("/inventory", createInventory);
router.put("/inventory/:id", updateInventory);
router.delete("/inventory/:id", deleteInventory);

module.exports = router;
