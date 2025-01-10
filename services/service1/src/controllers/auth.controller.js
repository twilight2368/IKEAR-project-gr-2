const bcrypt = require("bcrypt");

const AUTH_CONFIG = require("../configs/auth.config");
const EVENT_TYPE = require("../constants/mq/type");
//TODO: AUTHENTICATION CONTROLLERS

const UserModel = require("../models/schema/User");
const EmployeeModel = require("../models/schema/Employee");
const { publishToExchange } = require("../utils/mq");

/**
 * todo: Register a new user
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const userRegister = async (req, res, next) => {
  try {
    const { username, password, phone, email, country, city, address, store } =
      req.body;

    const user = await UserModel.findOne({ email: email });

    if (user) {
      return res.status(403).json({
        message: "User's email already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(
      password,
      AUTH_CONFIG.hash.saltRounds
    );

    const newUser = new UserModel({
      username,
      password: hashedPassword,
      phone,
      email,
      country,
      city,
      address,
      store,
    });

    await newUser.save();

    //todo: Publish to RabbitMQ "user" queue
    const message = JSON.stringify({
      event: EVENT_TYPE.CREATE,
      data: {
        _id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        phone: newUser.phone,
        country: newUser.country,
        city: newUser.city,
        address: newUser.address,
      },
    });

    await publishToExchange("user", message);

    res.status(201).json({
      message: "User register successful",
      user: newUser,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * todo: Login a user
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const userLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email: email }).select("+password");

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    const userWithoutPassword = user.toObject();
    delete userWithoutPassword.password;

    res.json({
      message: "Login successful",
      user: userWithoutPassword,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * todo: Logout a user
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

const userLogout = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

const employeeRegister = async (req, res, next) => {
  try {
    const { store, name, phone, email, password, role } = req.body;

    const hashedPassword = await bcrypt.hash(
      password,
      AUTH_CONFIG.hash.saltRounds
    );

    const newEmployee = new EmployeeModel({
      store,
      name,
      phone,
      email,
      password: hashedPassword,
      role,
    });

    await newEmployee.save();

    res.status(201).json({
      message: "Employee created successful",
      data: newEmployee,
    });
  } catch (error) {
    next(error);
  }
};

const employeeLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const employee = await EmployeeModel.findOne({
      email: email,
    }).select("+password");

    if (!employee) {
      return res.status(404).json({
        message: "Employee not found",
      });
    }

    const isMatch = await bcrypt.compare(password, employee.password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    const employeeWithoutPassword = employee.toObject();
    delete employeeWithoutPassword.password;

    res.json({
      message: "Login successful",
      user: employeeWithoutPassword,
    });
  } catch (error) {
    next(error);
  }
};

const employeeLogout = () => {
  try {
  } catch (error) {
    next(error);
  }
};

//TODO: Exports all controllers

module.exports = {
  userRegister,
  userLogin,
  userLogout,
  employeeRegister,
  employeeLogin,
  employeeLogout,
};
