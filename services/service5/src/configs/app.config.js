require("dotenv").config();

const APP_CONFIG = {
  PORT: process.env.PORT || 8005,
  dev_mode: process.env.NODE_ENV == "development" ? true : false,
};

module.exports = APP_CONFIG;
