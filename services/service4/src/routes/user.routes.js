const express = require("express");
const {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Hello world",
  });
});

router.get("/users", getUsers);

router.get("/user/:id", getUser);

router.put("/update-user/:id", updateUser);

router.delete("/delete-user/:id", deleteUser);

module.exports = router;
