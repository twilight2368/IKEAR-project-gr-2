const { Item: ItemModel } = require("../models/schemas/Item");
const { publishToExchange } = require("../utils/mq");
const EVENT_TYPE = require("../constants/mq/type");
const getItem = async (req, res, next) => {
  try {
    const { id } = req.params;

    const item = await ItemModel.findById(id).populate([
      "room",
      "product",
      "holiday",
    ]);

    if (!item) {
      return res.status(404).json({
        message: "Item not found",
        data: null,
      });
    }

    res.json({
      message: "Item found",
      data: item,
    });
  } catch (error) {
    next(error);
  }
};

const getRandomItem = async (req, res, next) => {
  try {
    // Destructure and set default number of items to fetch.
    const { num = 10 } = req.query;

    // Parse `num` to ensure it's a number.
    const limit = parseInt(num, 10);

    if (isNaN(limit) || limit <= 0) {
      return res
        .status(400)
        .json({ message: "Invalid number of items requested." });
    }

    // Fetch random items with populated fields using aggregation and population.
    const randomItems = await ItemModel.aggregate([
      { $sample: { size: limit } },
    ]);

    // Populate the references for the random items.
    const populatedItems = await ItemModel.populate(randomItems, [
      { path: "room" },
      { path: "product" },
      { path: "holiday" },
    ]);

    res.status(200).json({
      message: "Successful",
      data: populatedItems,
    });
  } catch (error) {
    // Pass any errors to the error-handling middleware.
    next(error);
  }
};

const getAllItem = async (req, res, next) => {
  try {
    const { page = 1, limit = 24 } = req.query; // Get page and limit from query parameters
    const skip = (page - 1) * limit; // Calculate the number of items to skip

    const items = await ItemModel.find()
      .skip(skip) // Skip the items based on the current page
      .limit(limit)
      .populate(["room", "product", "holiday"]); // Limit the number of items returned per page

    const totalItems = await ItemModel.countDocuments(); // Get the total number of items in the database

    if (!items || items.length == 0) {
      return res.status(404).json({
        message: "Items not found",
        data: [],
        pagination: {
          currentPage: page,
          totalItems: 0,
          totalPages: 0,
          itemsPerPage: limit,
        },
      });
    }

    const totalPages = Math.ceil(totalItems / limit); // Calculate the total number of pages

    res.json({
      message: "Items found",
      data: items,
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

const getItemWithFilter = async (req, res, next) => {
  try {
    const { color, size, name, price } = req.query;
    let filter = {};

    if (color) filter.color = color;
    if (size) filter.size = size;
    if (name) filter.name = name;
    if (price) filter.price = price;

    const items = await ItemModel.find(filter);

    if (!items || items.length == 0) {
      return res.status(404).json({
        message: "Item not found",
        data: [],
      });
    }

    res.json({
      message: "Item found",
      data: items,
    });
  } catch (error) {
    next(error);
  }
};

const getAllItemByRoom = async (req, res, next) => {
  try {
    const { color, size, name, page = 1, limit = 30 } = req.query; // Pagination parameters
    const { id } = req.params;

    let filter = { room: id };

    if (color) filter.color = color;
    if (size) filter.size = size;
    if (name) filter.name = { $regex: name, $options: "i" }; // Case-insensitive search

    // Calculate skip for pagination
    const skip = (page - 1) * limit;

    // Find items with pagination
    const items = await ItemModel.find(filter)
      .skip(skip)
      .limit(parseInt(limit, 10));

    // Count total items for metadata
    const totalItems = await ItemModel.countDocuments(filter);

    if (!items || items.length === 0) {
      return res.status(404).json({
        message: "Items not found",
        data: [],
      });
    }

    res.json({
      message: "Items found",
      data: items,
      metadata: {
        totalItems,
        currentPage: parseInt(page, 10),
        totalPages: Math.ceil(totalItems / limit),
        itemsPerPage: parseInt(limit, 10),
      },
    });
  } catch (error) {
    next(error);
  }
};

const getAllItemByProduct = async (req, res, next) => {
  try {
    const { color, size, name, page = 1, limit = 30 } = req.query; // Pagination parameters
    const { id } = req.params;

    let filter = { product: id };

    if (color) filter.color = color;
    if (size) filter.size = size;
    if (name) filter.name = { $regex: name, $options: "i" }; // Case-insensitive search

    // Calculate skip for pagination
    const skip = (page - 1) * limit;

    // Find items with pagination
    const items = await ItemModel.find(filter)
      .skip(skip)
      .limit(parseInt(limit, 10));

    // Count total items for metadata
    const totalItems = await ItemModel.countDocuments(filter);

    if (!items || items.length === 0) {
      return res.status(404).json({
        message: "Items not found",
        data: [],
      });
    }

    res.json({
      message: "Items found",
      data: items,
      metadata: {
        totalItems,
        currentPage: parseInt(page, 10),
        totalPages: Math.ceil(totalItems / limit),
        itemsPerPage: parseInt(limit, 10),
      },
    });
  } catch (error) {
    next(error);
  }
};

const getAllItemByHoliday = async (req, res, next) => {
  try {
    const { color, size, name } = req.query; // filter by color, size, name, price
    const { id } = req.params;

    let filter = { product: id };

    if (color) filter.color = color;
    if (size) filter.size = size;
    if (name) filter.name = name;

    const items = await ItemModel.find(filter);

    if (!items || items.length == 0) {
      return res.status(404).json({
        message: "Item not found",
        data: [],
      });
    }

    res.json({
      message: "Item found",
      data: items,
    });
  } catch (error) {
    next(error);
  }
};

const createItem = async (req, res, next) => {
  try {
    console.log("====================================");
    console.log(req.body);
    console.log("====================================");
    const {
      name,
      description,
      short_description,
      price,
      color,
      size,
      holiday,
      product,
      room,
    } = req.body;

    const newItem = new ItemModel({
      name: name,
      description: description,
      short_description: short_description,
      price: price,
      color: color,
      size: size,
      holiday: holiday,
      product: product,
      room: room,
    });

    await newItem.save();

    publishToExchange(
      "product",
      JSON.stringify({
        event: EVENT_TYPE.CREATE,
        data: newItem,
      })
    );

    res.status(201).json({
      message: "Item created",
      data: newItem,
    });
  } catch (error) {
    next(error);
  }
};

const updateItem = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      name,
      description,
      short_description,
      price,
      color,
      size,
      holiday,
      product,
      room,
    } = req.body;

    await ItemModel.findByIdAndUpdate(id, {
      name: name,
      description: description,
      short_description: short_description,
      price: price,
      color: color,
      size: size,
      holiday: holiday,
      product: product,
      room: room,
    });

    const newItemInfo = await ItemModel.findById(id);

    res.json({
      message: "Item updated",
      data: newItemInfo,
    });
  } catch (error) {
    next(error);
  }
};

const deleteItem = async (req, res, next) => {
  try {
    const { id } = req.params;

    await ItemModel.findByIdAndDelete(id);

    res.json({ message: "Item deleted" });
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
  getRandomItem,
  createItem,
  updateItem,
  deleteItem,
};
