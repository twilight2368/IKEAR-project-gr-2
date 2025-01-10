const InventoryModel = require("../models/schemas/Inventory");
const { publishToQueue } = require("../utils/mq");

const getInventoryById = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

const getInventoryByStore = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { page = 1, limit = 24 } = req.query; // Get page and limit from query params (default: 1, 10)

    // Calculate the skip value for pagination
    const skip = (page - 1) * limit;

    // Fetch paginated data with .skip() and .limit()
    const inventoryList = await InventoryModel.find({ store: id })
      .skip(skip)
      .limit(limit)
      .populate({
        path: "item", // First level population: Item
        populate: ["room", "holiday", "product"],
      });

    // Count total inventory items for pagination
    const totalItems = await InventoryModel.countDocuments({ store: id });

    if (!inventoryList || inventoryList.length === 0) {
      return res.status(404).json({
        message: "Inventory not found",
        data: [],
      });
    }

    const totalPages = Math.ceil(totalItems / limit); // Calculate total pages

    res.json({
      message: "Inventory found",
      data: inventoryList,
      pagination: {
        currentPage: page,
        totalItems: totalItems,
        totalPages: totalPages,
        itemsPerPage: limit,
      },
    });
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

    publishToQueue(
      "product",
      JSON.stringify({
        event: EVENT_TYPE.CREATE,
        data: inventory,
      })
    );
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
  getInventoryById,
  getInventoryByStore,
  createInventory,
  updateInventory,
  deleteInventory,
};
