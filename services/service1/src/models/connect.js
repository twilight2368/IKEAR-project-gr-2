const mongoose = require("mongoose");
const clc = require("cli-color");

const Store = require("./schema/Store");
const User = require("./schema/User");
const Employee = require("./schema/Employee");
const Admin = require("./schema/Admin");
const Token = require("./schema/Token");

const DB_CONFIG = require("../configs/db.config");

const CONNECT_STRING = DB_CONFIG.stringConnect;

const connectMongoDB = async () => {
  try {
    await mongoose.connect(CONNECT_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

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
