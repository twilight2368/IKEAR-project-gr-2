const express = require("express");
const {
  getStores,
  getStore,
  updateStore,
  deleteStore,
  createStore,
} = require("../controllers/store.controller");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Hello world",
  });
});

router.get("/stores", getStores);

router.get("/store/:id", getStore);

router.post("/store", createStore);

router.put("/update-store/:id", updateStore);

router.delete("/delete-store/:id", deleteStore);

module.exports = router;
