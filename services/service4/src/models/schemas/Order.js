const mongoose = require("mongoose");

const DELIVERY_TYPE = require("../../constants/delivery_type");
const ORDER_STATUS = require("../../constants/order_status");
const PAYMENT_TYPE = require("../../constants/payment_type");
const OrderToItem = new mongoose.Schema({
  item: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "item",
  },
  quantity: {
    type: Number,
    min: 1,
  },
});

const OrderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    store: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    status: {
      type: String,
      enum: Object.values(ORDER_STATUS),
      default: ORDER_STATUS.PENDING,
      required: true,
    },
    date: {
      type: Date,
      required: true,
      default: Date.now,
    },
    total_item_price: {
      type: Number,
      required: true,
      min: 0,
    },
    total_items: {
      type: Number,
      required: true,
      min: 1,
    },
    items: [OrderToItem],

    delivery_type: {
      type: String,
      enum: Object.values(DELIVERY_TYPE),
    },

    payment_type: {
      type: String,
      enum: Object.values(PAYMENT_TYPE),
    },

    total_price: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

const OrderModel = mongoose.model("order", OrderSchema);

module.exports = OrderModel;
