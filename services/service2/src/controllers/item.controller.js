const { Item: ItemModel } = require("../models/schemas/Item");
const { publishToExchange } = require("../utils/mq");
const EVENT_TYPE = require("../constants/mq/type");
const getItem = async (req, res, next) => {
  try {
    const { id } = req.params;

    const item = await ItemModel.findById(id);

    if (!item) {
      return res.status(404).json({
        message: "Item not found",
        data: {},
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

const getAllItem = async (req, res, next) => {
  try {
    const items = await ItemModel.find();

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
    const { color, size, name, price } = req.query; // filter by color, size, name, price
    const { id } = req.params;

    let filter = { room: id };

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

const getAllItemByProduct = async (req, res, next) => {
  try {
    const { color, size, name, price } = req.query; // filter by color, size, name, price
    const { id } = req.params;

    let filter = { product: id };

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

const getAllItemByHoliday = async (req, res, next) => {
  try {
    const { color, size, name, price } = req.query; // filter by color, size, name, price
    const { id } = req.params;

    let filter = { product: id };

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
  createItem,
  updateItem,
  deleteItem,
};
