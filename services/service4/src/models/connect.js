const mongoose = require("mongoose");
const clc = require("cli-color");
const DB_CONFIG = require("../configs/database.config");

const User = require("./schemas/User");
const Inventory = require("./schemas/Inventory");
const Order = require("./schemas/Order");

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
