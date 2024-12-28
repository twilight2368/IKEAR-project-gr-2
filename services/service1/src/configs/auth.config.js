require("dotenv").config();

const AUTH_CONFIG = {
  jwt: {
    secret: process.env.JWT_SECRET,
    refreshToken: {
      secret: process.env.JWT_REFRESH_SECRET || "hello world",
      expiredIn: 3 * 30 * 24 * 60 * 60 * 1000, //? 3 months
    },
    accessToken: {
      secret: process.env.JWT_ACCESS_SECRET || "hello world",
      expiredIn: 24 * 60 * 60 * 1000, //? 24 hours
    },
  },
  cookie: {
    secret: process.env.COOKIE_SECRET,
    expiredIn: 0,
  },
  hash: {
    saltRounds: 10,
  },
  captcha: {
    secret: process.env.CAPTCHA_SECRET,
  },
};

module.exports = AUTH_CONFIG;
