const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello, World!");
});

router.post("/register", (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

router.post("/login", (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

router.post("/logout", (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

router.post("/admin-register", (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

router.post("/admin-login", (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

router.post("/admin-logout", (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

router.post("/store-register", (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

router.post("/store-login", (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

router.post("/store-logout", (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

module.exports = router;
