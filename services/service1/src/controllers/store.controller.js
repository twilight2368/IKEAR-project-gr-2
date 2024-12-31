const StoreModel = require("../models/schema/Store");

//TODO: STORE CONTROLLERS
const getStores = async (req, res, next) => {
  try {
    const stores = StoreModel.find();

    if (!stores || stores.length == 0) {
      return res.json({
        message: "Store not found",
        data: [],
      });
    }

    res.json({
      message: "Found all stores",
      data: stores,
    });
  } catch (error) {
    next(error);
  }
};

const getStore = async (req, res, next) => {
  try {
    const { id } = req.params;

    const store = await StoreModel.findById(id);

    if (!store) {
      return res.status(404).json({
        message: "Store not found",
        data: null,
      });
    }

    res.json({
      message: "Store found",
      data: store,
    });
  } catch (error) {
    next(error);
  }
};

const createStore = async (req, res, next) => {
  try {
    const {
      name,
      description,
      phone,
      address,
      longitude,
      latitude,
      city,
      country,
      weekdayOpen,
      weekdayClose,
      weekendOpen,
      weekendClose,
    } = req.body;

    const newStore = new StoreModel({
      name,
      description,
      phone,
      address,
      longitude,
      latitude,
      city,
      country,
      weekdayOpen,
      weekdayClose,
      weekendOpen,
      weekendClose,
    });

    await newStore.save();

    res.json({
      message: "Create store successful",
      data: newStore,
    });
  } catch (error) {
    next(error);
  }
};

const updateStore = async (req, res, next) => {
  try {
    const { id } = req.params;

    const {
      name,
      description,
      phone,
      address,
      longitude,
      latitude,
      city,
      country,
      weekdayOpen,
      weekdayClose,
      weekendOpen,
      weekendClose,
    } = req.body;

    await StoreModel.findByIdAndUpdate(id, {
      name,
      description,
      phone,
      address,
      longitude,
      latitude,
      city,
      country,
      weekdayOpen,
      weekdayClose,
      weekendOpen,
      weekendClose,
    });
  } catch (error) {
    next(error);
  }
};

const deleteStore = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

//TODO: Exports all controllers
module.exports = {
  getStores,
  getStore,
  createStore,
  updateStore,
  deleteStore,
};
