require("dotenv").config();

const DATABASE_CONFIG = {
  stringConnect: process.env.DEV_MONGO_CONNECT_STRING,
  post: process.env.DEV_MONGO_PORT,
  database: process.env.DEV_MONGO_DATABASE_NAME,
  user: process.env.DEV_MONGO_USER,
  password: process.env.DEV_MONGO_PASSWORD,
};

module.exports = DATABASE_CONFIG;
