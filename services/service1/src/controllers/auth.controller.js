const bcrypt = require("bcrypt");

const AUTH_CONFIG = require("../configs/auth.config");

//TODO: AUTHENTICATION CONTROLLERS

const UserModel = require("../models/schema/User");
const EmployeeModel = require("../models/schema/Employee");

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
        message: "User already exists",
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

    res.json({
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

    res.json({
      message: "Login successful",
      user: user,
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

    res.json({
      message: "Employee created successful",
      data: newEmployee,
    });
  } catch (error) {
    next(error);
  }
};

const employeeLogin = async (req, res, next) => {
  try {
    const { store, email, password, role } = req.body;

    const employee = EmployeeModel.findOne({
      store: store,
      email: email,
      role: role,
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

    res.json({
      message: "Login successful",
      user: user,
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
