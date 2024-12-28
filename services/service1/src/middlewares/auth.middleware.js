const jwt = require("jsonwebtoken");
const AUTH_CONFIG = require("../configs/auth.config");

const checkAccessToken = (req, res, next) => {
  const token = req.cookies.accessToken;

  if (!token) {
    return res.status(401).json({ message: "Access token is missing" });
  }

  try {
    const decoded = jwt.verify(token, AUTH_CONFIG.jwt.accessToken.secret);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid access token" });
  }
};

module.exports = checkAccessToken;
