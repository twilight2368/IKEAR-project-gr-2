const express = require("express");
const { Room, Product, Holiday } = require("../models/schemas/Item");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Hello World",
  });
});

router.get("/rooms", async (req, res, next) => {
  try {
    const rooms = await Room.find();

    if (!rooms || rooms.length == 0) {
      return res.status(404).json({
        message: "Room not found",
        data: [],
      });
    }

    res.json({
      message: "Rooms found",
      data: rooms,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/products", async (req, res, next) => {
  try {
    const products = await Product.find();

    if (!products || products.length == 0) {
      return res.status(404).json({
        message: "Products not found",
        data: [],
      });
    }

    res.json({
      message: "Products found",
      data: products,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/holidays", async (req, res, next) => {
  try {
    const holidays = await Holiday.find();

    if (!holidays || holidays.length == 0) {
      return res.status(404).json({
        message: "Holiday not found",
        data: [],
      });
    }

    res.json({
      message: "Holiday found",
      data: holidays,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
