require("dotenv").config();

const APP_CONFIG = {
  PORT: process.env.PORT || 8004,
  dev_mode: process.env.NODE_ENV == "development" ? true : false,
  stripe: {
    private_key: process.env.STRIPE_PRIVATE_KEY || "",
  },
};

module.exports = APP_CONFIG;
