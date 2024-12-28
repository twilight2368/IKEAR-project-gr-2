const express = require("express");
const { updateAdmin, deleteAdmin } = require("../controllers/admin.controller");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Hello world",
  });
});

router.put("/update-admin/:id", updateAdmin);

router.delete("/delete-admin/:id", deleteAdmin);

module.exports = router;
