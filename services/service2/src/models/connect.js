const mongoose = require("mongoose");
const clc = require("cli-color");
const Item = require("./schemas/Item");
const Store = require("./schemas/Store");
const Inventory = require("./schemas/Inventory");
const DB_CONFIG = require("../configs/db.config");

const CONNECT_STRING = DB_CONFIG.stringConnect;

const connectMongoDB = async () => {
  try {
    await mongoose.connect(CONNECT_STRING);
    console.log("====================================");
    console.log(clc.green("Connected to MongoDB successfully"));
    console.log("====================================");
  } catch (error) {
    console.log("====================================");
    console.log(clc.red("Error connecting to MongoDB"));
    console.error(error);
    console.log("====================================");
  }
};

module.exports = connectMongoDB;
