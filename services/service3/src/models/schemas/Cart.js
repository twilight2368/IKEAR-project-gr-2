const mongoose = require("mongoose");

const CartItemSchema = new mongoose.Schema({
  item: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "item",
  },
  quantity: {
    type: Number,
    min: 1,
  },
});

const CartSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    items: [CartItemSchema],
    total_quantity: {
      type: Number,
      min: 1,
      default: 1,
    },
    total_price: {
      type: Number,
      min: 0,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const CartModel = mongoose.model("cart", CartSchema);

module.exports = CartModel;
