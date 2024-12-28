const express = require("express");
const {
  userRegister,
  userLogin,
  userLogout,
  adminRegister,
  adminLogin,
  adminLogout,
  storeRegister,
  storeLogin,
  storeLogout,
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

//TODO: Admins authentication routes

router.post("/admin-register", adminRegister);

router.post("/admin-login", adminLogin);

router.get("/admin-logout", adminLogout);

//TODO: Employees authentication routes

router.post("/store-register", storeRegister);

router.post("/store-login", storeLogin);

router.get("/store-logout", storeLogout);

module.exports = router;
