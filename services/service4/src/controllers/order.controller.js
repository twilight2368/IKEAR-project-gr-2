const InventoryModel = require("../models/schemas/Inventory");
const OrderModel = require("../models/schemas/Order");
const ItemModel = require("../models/schemas/Item");
const createOrder = async (req, res, next) => {
  try {
    const { user, store, items, delivery_type, payment_type } = req.body;

    // Validate required fields
    if (
      !user ||
      !store ||
      !items ||
      !Array.isArray(items) ||
      items.length === 0 ||
      !delivery_type ||
      !payment_type
    ) {
      return res
        .status(400)
        .json({ message: "Invalid input. All fields are required." });
    }

    // Fetch inventory details for the provided items
    const inventoryItems = await InventoryModel.find({
      store,
      item: { $in: items.map((item) => item.item) },
    });

    // Prepare `items` for the order, calculate total_items and total_price
    let total_items = 0;
    let total_item_price = 0;
    const orderItems = [];

    for (const { item, quantity } of items) {
      const inventory = await inventoryItems.find(
        (inv) => inv.item.toString() === item
      );

      const itemQuery = await ItemModel.findById(item);

      if (!inventory) {
        return res.status(400).json({
          message: `Item with ID ${item} not found in store inventory.`,
        });
      }

      if (quantity > inventory.quantity) {
        return res.status(400).json({
          message: `Insufficient stock for item ID ${item}. Available: ${inventory.quantity}.`,
        });
      }

      orderItems.push({
        item,
        quantity,
      });

      total_items += quantity;
      total_item_price += quantity * itemQuery.price;
    }

    const total_price = total_item_price;

    // Create a new order
    const newOrder = new OrderModel({
      user,
      store,
      total_item_price,
      total_items,
      items: orderItems,
      delivery_type,
      payment_type,
      total_price,
    });

    // Save the order
    const savedOrder = await newOrder.save();

    // // Deduct quantities from inventory
    // for (const { item, quantity } of items) {
    //   await InventoryModel.findOneAndUpdate(
    //     { store, item },
    //     { $inc: { quantity: -quantity } }
    //   );
    // }

    res.status(201).json({
      success: true,
      message: "Order created successfully",
      data: savedOrder,
    });
  } catch (error) {
    next(error);
  }
};

// Get all orders
const getAllOrders = async (req, res, next) => {
  try {
    const orders = await OrderModel.find().populate("user");
    res.status(200).json({ data: orders });
  } catch (error) {
    next(error);
  }
};

// Get all orders by store
const getAllOrdersByStore = async (req, res, next) => {
  try {
    const { id } = req.params; // Store ID

    if (!id) {
      return res.status(400).json({ message: "Store ID is required." });
    }

    const orders = await OrderModel.find({ store: id }).populate("user");
    res.status(200).json({ data: orders });
  } catch (error) {
    next(error);
  }
};

// Get all orders by user
const getAllOrdersByUser = async (req, res, next) => {
  try {
    const { id } = req.params; // User ID

    if (!id) {
      return res.status(400).json({ message: "User ID is required." });
    }

    const orders = await OrderModel.find({ user: id }).populate("items.item");
    res.status(200).json({ data: orders });
  } catch (error) {
    next(error);
  }
};

const getOneOrder = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "ID is required." });
    }

    const orders = await OrderModel.findById(id).populate("user items.item");

    res.status(200).json({ data: orders });
  } catch (error) {
    next(error);
  }
};

const updateOrderStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    if (!id) {
      return res.status(400).json({ message: "ID is required." });
    }

    const orders = await OrderModel.findByIdAndUpdate(
      id,
      {
        status: status,
      },
      { new: true }
    ).populate("user items.item");

    res.status(200).json({ data: orders });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createOrder,
  getAllOrders,
  getAllOrdersByStore,
  getAllOrdersByUser,
  getOneOrder,
  updateOrderStatus,
};
