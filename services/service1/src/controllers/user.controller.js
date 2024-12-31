const UserModel = require("../models/schema/User");

const getUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await UserModel.findById(id);

    if (!user) {
      return res.json({
        message: "No user found",
        data: null,
      });
    }

    res.json({
      message: "User found",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

const getUsers = async (req, res, next) => {
  try {
    const users = await UserModel.find();

    if (!users) {
      return res.json({
        message: "No user found",
        data: [],
      });
    }

    res.json({
      message: "All users found",
      data: users,
    });
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { username, phone, email, country, city, address, store } = req.body;
    await UserModel.findOneAndUpdate(
      { _id: id },
      {
        username: username,
        phone: phone,
        email: email,
        country: country,
        city: city,
        address: address,
        store: store,
      }
    );

    const newUserInfo = await UserModel.findById(id);

    res.json({
      message: "Update successful",
      data: newUserInfo,
    });
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    await UserModel.findByIdAndDelete(id);

    res.json({
      message: "Delete successful",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getUser,
  getUsers,
  updateUser,
  deleteUser,
};
