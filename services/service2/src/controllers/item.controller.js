const getItem = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

const getAllItem = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

const getItemWithFilter = async (req, res, next) => {
  try {
    const { color, size, name, price } = req.query;
  } catch (error) {
    next(error);
  }
};

const getAllItemByRoom = async (req, res, next) => {
  try {
    const { color, size, name, price } = req.query;
  } catch (error) {
    next(error);
  }
};

const getAllItemByProduct = async (req, res, next) => {
  try {
    const { color, size, name, price } = req.query;
  } catch (error) {
    next(error);
  }
};

const getAllItemByHoliday = async (req, res, next) => {
  try {
    const { color, size, name, price } = req.query;
  } catch (error) {
    next(error);
  }
};

const createItem = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

const updateItem = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

const deleteItem = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllItem,
  getItem,
  getItemWithFilter,
  getAllItemByRoom,
  getAllItemByProduct,
  getAllItemByHoliday,
  createItem,
  updateItem,
  deleteItem,
};
