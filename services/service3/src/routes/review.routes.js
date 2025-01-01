const { getReview, addReview } = require("../controllers/review.controller");

const express = require("express");
const router = express.Router();

router.get("/:id", getReview);
router.post("/:id", addReview);

module.exports = router;
