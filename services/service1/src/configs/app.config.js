require("dotenv").config();

const APP_CONFIG = {
  PORT: process.env.PORT || 3001,
  dev_mode: process.env.NODE_ENV == "development" ? true : false,
  nodemailer: {
    email_from: process.env.EMAIL_FROM,
    service: "gmail",
    auth: {
      user: process.env.EMAIL_FROM,
      pass: process.env.APP_PASSWORD_GG,
    },
  },
};

module.exports = APP_CONFIG;
