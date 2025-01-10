const express = require("express");
const router = express.Router();

const {
  getAllItem,
  getItem,
  getItemWithFilter,
  getAllItemByRoom,
  getAllItemByProduct,
  getAllItemByHoliday,
  createItem,
  updateItem,
  deleteItem,
  getRandomItem,
} = require("../controllers/item.controller");

router.get("/", (req, res) => {
  res.json({
    message: "Hello World",
  });
});

router.get("/items-random", getRandomItem);
router.get("/items", getAllItem);
router.get("/items/:id", getItem);
router.get("/items-filter", getItemWithFilter);

router.get("/items-room/:id", getAllItemByRoom);
router.get("/items-product/:id", getAllItemByProduct);
router.get("/items-holiday/:id", getAllItemByHoliday);

router.post("/items", createItem);
router.put("/items/:id", updateItem);
router.delete("/items/:id", deleteItem);

module.exports = router;
