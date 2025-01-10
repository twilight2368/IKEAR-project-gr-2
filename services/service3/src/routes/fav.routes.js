const express = require("express");
const router = express.Router();

const {
  getFavItem,
  addFavItem,
  removeFavItem,
} = require("../controllers/fav.controller");

router.get("/fav-item/:id", getFavItem);
router.post("/fav-item", addFavItem);
router.delete("/fav-item/:id", removeFavItem);
module.exports = router;
