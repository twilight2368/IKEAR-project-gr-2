const express = require("express");
const { Room, Product, Holiday } = require("../models/schemas/Item");
const COLORS = require("../constants/item/color");
const SIZES = require("../constants/item/size");
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

router.get("/rooms/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const room = await Room.findById(id);

    if (!room) {
      return res.status(404).json({
        message: "Room not found",
        data: null,
      });
    }

    res.json({
      message: "Room found",
      data: room,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/products/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
        data: null,
      });
    }

    res.json({
      message: "Product found",
      data: product,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/holidays/:id", async (req, res, next) => {
  try {
    const holiday = await Holiday.findById(id);

    if (!holiday) {
      return res.status(404).json({
        message: "Holiday not found",
        data: null,
      });
    }

    res.json({
      message: "Holiday found",
      data: holiday,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/colors", async (req, res, next) => {
  try {
    res.json({
      message: "Colors found",
      data: Object.values(COLORS),
    });
  } catch (error) {
    next(error);
  }
});

router.get("/sizes", async (req, res, next) => {
  try {
    res.json({
      message: "Sizes found",
      data: Object.values(SIZES),
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
