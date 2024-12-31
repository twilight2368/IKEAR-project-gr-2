const express = require("express");
const {
  userRegister,
  userLogin,
  userLogout,
  employeeRegister,
  employeeLogin,
  employeeLogout,
} = require("../controllers/auth.controller");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Hello world",
  });
});

//TODO: Users authentication routes

router.post("/register", userRegister);

router.post("/login", userLogin);

router.get("/logout", userLogout);

router.post("/employee-register", employeeRegister);

router.post("/employee-login", employeeLogin);

router.get("/employee-logout", employeeLogout);

module.exports = router;
