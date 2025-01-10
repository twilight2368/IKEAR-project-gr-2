const StoreModel = require("../models/schema/Store");
const { publishToQueue } = require("../utils/mq");
const EVENT_TYPE = require("../constants/mq/type");
//TODO: STORE CONTROLLERS
const getStores = async (req, res, next) => {
  try {
    const stores = await StoreModel.find();

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
      city,
      country,
      weekdayOpen,
      weekdayClose,
      weekendOpen,
      weekendClose,
    });

    await newStore.save();

    //todo: Publish to RabbitMQ "store" queue
    const message = JSON.stringify({
      event: EVENT_TYPE.CREATE,
      data: {
        _id: newStore._id,
        name: newStore.name,
        description: newStore.description,
        phone: newStore.phone,
        address: newStore.address,
        city: newStore.city,
        country: newStore.country,
        weekdayOpen: newStore.weekdayOpen,
        weekdayClose: newStore.weekdayClose,
        weekendOpen: newStore.weekendOpen,
        weekendClose: newStore.weekendClose,
      },
    });

    await publishToQueue("store", message);

    res.status(201).json({
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

    const newStoreInfo = await StoreModel.findById(id);

    res.json({
      message: "Update store successful",
      data: newStoreInfo,
    });
  } catch (error) {
    next(error);
  }
};

const deleteStore = async (req, res, next) => {
  try {
    const { id } = req.params;

    await StoreModel.findByIdAndDelete(id);

    res.json({
      message: "Delete successful",
    });
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
