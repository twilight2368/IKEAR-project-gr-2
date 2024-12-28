//TODO: AUTHENTICATION CONTROLLERS

/**
 * todo: Register a new user
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const userRegister = async (req, res, next) => {
  try {
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

/**
 * todo: Register an admin
 * @param {} req
 * @param {*} res
 * @param {*} next
 */

const adminRegister = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

/**
 * todo: Login an admin
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const adminLogin = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

/**
 * todo: Logout an admin
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const adminLogout = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

/**
 * todo: Register a new employee with specific role and store
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

const storeRegister = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

/**
 * todo: Login an employee with specific role and store
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

const storeLogin = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

/**
 * todo: Logout an employee
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

const storeLogout = async (req, res, next) => {
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
  adminRegister,
  adminLogin,
  adminLogout,
  storeRegister,
  storeLogin,
  storeLogout,
};
