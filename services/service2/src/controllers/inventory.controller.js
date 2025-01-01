const InventoryModel = require("../models/schemas/Inventory");

const getInventory = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

const getAllInventory = async (req, res, next) => {
  try {
    const inventoryList = await InventoryModel.find().populate([
      "store",
      "item",
    ]);

    if (!inventoryList || inventoryList.length == 0) {
      return res.status.json({
        message: "Inventory not found",
        data: [],
      });
    }

    res.json({
      message: "Inventory found",
      data: inventoryList,
    });
  } catch (error) {
    next(error);
  }
};

const updateInventory = async (req, res, next) => {
  try {
    const { id } = req.params;

    const { store, item, quantity } = req.body;

    await InventoryModel.findByIdAndUpdate(id, {
      store: store,
      item: item,
      quantity: quantity,
    });

    const newInventoryInfo = await InventoryModel.findById(id);

    res.json({
      message: "Update successful",
      data: newInventoryInfo,
    });
  } catch (error) {
    next(error);
  }
};

const createInventory = async (req, res, next) => {
  try {
    const { store, item, quantity } = req.body;

    const inventory = new InventoryModel({
      store: store,
      item: item,
      quantity: quantity,
    });

    await inventory.save();
  } catch (error) {
    next(error);
  }
};

const deleteInventory = async (req, res, next) => {
  try {
    const { id } = req.params;

    await InventoryModel.findByIdAndDelete(id);

    res.json({
      message: "Delete successful",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllInventory,
  getInventory,
  createInventory,
  updateInventory,
  deleteInventory,
};
