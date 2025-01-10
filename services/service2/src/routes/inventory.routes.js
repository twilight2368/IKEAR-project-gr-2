const express = require("express");
const router = express.Router();

const {
  getAllInventory,

  createInventory,
  updateInventory,
  deleteInventory,
  getInventoryById,
  getInventoryByStore,
} = require("../controllers/inventory.controller");

router.get("/", (req, res) => {
  res.json({
    message: "Hello World",
  });
});

router.get("/inventory-store/:id", getInventoryByStore);
router.get("/inventory", getAllInventory);
router.get("/inventory/:id", getInventoryById);
router.post("/inventory", createInventory);
router.put("/inventory/:id", updateInventory);
router.delete("/inventory/:id", deleteInventory);

module.exports = router;
