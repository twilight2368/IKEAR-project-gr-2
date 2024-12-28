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

router.post("/register", userRegister);

router.post("/login", userLogin);

router.post("/logout", userLogout);

router.post("/admin-register", adminRegister);

router.post("/admin-login", adminLogin);

router.post("/admin-logout", adminLogout);

router.post("/store-register", storeRegister);

router.post("/store-login", storeLogin);

router.post("/store-logout", storeLogout);

module.exports = router;
