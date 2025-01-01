const CartModel = require("../models/CartModel");
const ItemModel = require("../models/ItemModel");

const getCart = async (req, res, next) => {
  try {
    const { id } = req.params;

    const cart = await CartModel.findOne({ user: id })
      .populate("items.item")
      .lean();

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    res.status(200).json(cart);
  } catch (error) {
    next(error);
  }
};

const createCart = async (req, res, next) => {
  try {
    const userId = req.user._id;

    // Check if cart already exists for user
    let cart = await CartModel.findOne({ user: userId });
    if (cart) {
      return res
        .status(400)
        .json({ message: "Cart already exists for this user" });
    }

    // Create new cart with calculated total price
    cart = await CartModel.create({
      user: userId,
      items: [],
      total_quantity: 0,
      total_price: 0,
    });

    await cart.populate("items.item");

    res.status(201).json(cart);
  } catch (error) {
    next(error);
  }
};

const updateCart = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const { itemId, quantity, action } = req.body;

    // Validate item exists and get its price
    const item = await ItemModel.findById(itemId);
    if (!item && (action === "add" || action === "update")) {
      return res.status(404).json({ message: "Item not found" });
    }

    const cart = await CartModel.findOne({ user: userId });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    if (action === "add") {
      const existingItemIndex = cart.items.findIndex(
        (cartItem) => cartItem.item.toString() === itemId
      );

      if (existingItemIndex !== -1) {
        cart.items[existingItemIndex].quantity += quantity;
      } else {
        cart.items.push({ item: itemId, quantity });
      }
    } else if (action === "remove") {
      cart.items = cart.items.filter(
        (cartItem) => cartItem.item.toString() !== itemId
      );
    } else if (action === "update") {
      const itemToUpdate = cart.items.find(
        (cartItem) => cartItem.item.toString() === itemId
      );
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    }

    // Recalculate totals
    // First, populate items to get their prices
    await cart.populate("items.item");

    cart.total_quantity = cart.items.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    cart.total_price = cart.items.reduce(
      (total, cartItem) => total + cartItem.item.price * cartItem.quantity,
      0
    );

    // Save updated cart
    await cart.save();

    res.status(200).json(cart);
  } catch (error) {
    next(error);
  }
};

const deleteCart = async (req, res, next) => {
  try {
    const userId = req.user._id;

    const result = await CartModel.findOneAndDelete({ user: userId });

    if (!result) {
      return res.status(404).json({ message: "Cart not found" });
    }

    res.status(200).json({ message: "Cart deleted successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getCart,
  createCart,
  updateCart,
  deleteCart,
};
