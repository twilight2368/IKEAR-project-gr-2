const mongoose = require("mongoose");
const clc = require("cli-color");
const DB_CONFIG = require("../configs/database.config");
const User = require("./schemas/User");
const Item = require("./schemas/Item");
const Cart = require("./schemas/Cart");
const Fav = require("./schemas/FavoriteList");
const Review = require("./schemas/Review");

const CONNECT_STRING = DB_CONFIG.stringConnect;

const connectMongoDB = async () => {
  try {
    await mongoose.connect(CONNECT_STRING);

    console.log("====================================");
    console.log(clc.green("Connected to MongoDB successfully"));
    console.log("====================================");
  } catch (error) {
    console.log("====================================");
    console.error(error);
    console.log("====================================");
  }
};

module.exports = connectMongoDB;
