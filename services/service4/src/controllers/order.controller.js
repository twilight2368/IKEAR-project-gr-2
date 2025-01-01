const InventoryModel = require("../models/schemas/Inventory");
const OrderModel = require("../models/schemas/Order");

const createOrder = async (req, res, next) => {
  try {
    const { user, store, items, delivery_type } = req.body;

    // Validate required fields
    if (
      !user ||
      !store ||
      !items ||
      !Array.isArray(items) ||
      items.length === 0 ||
      !delivery_type
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

    // Prepare item_inventory, calculate total_items and total_amount
    let total_items = 0;
    let total_amount = 0;
    const item_inventory = [];

    for (const { item, quantity } of items) {
      const inventory = inventoryItems.find(
        (inv) => inv.item.toString() === item
      );

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

      // Add to item_inventory
      item_inventory.push({
        item,
        inventory: inventory._id,
        quantity,
        price: inventory.price, // Assuming `price` exists in the inventory model
      });

      total_items += quantity;
      total_amount += quantity * inventory.price;
    }

    // Create a new order
    const newOrder = new OrderModel({
      user,
      store,
      status: "Pending", // Default status
      total_amount,
      total_items,
      item_inventory,
      delivery_type,
    });

    // Save the order
    const savedOrder = await newOrder.save();

    // Deduct quantities from inventory
    for (const { inventory, quantity } of item_inventory) {
      await InventoryModel.findByIdAndUpdate(inventory, {
        $inc: { quantity: -quantity },
      });
    }

    res
      .status(201)
      .json({ message: "Order created successfully", data: savedOrder });
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

    const orders = await OrderModel.find({ user: id }).populate(
      "store item_inventory.item inventory"
    );
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
};
