const mongoose = require("mongoose");

const DELIVERY_TYPE = require("../../constants/delivery_type");
const DELIVERY_STATUS = require("../../constants/delivery_status");
const ORDER_STATUS = require("../../constants/order_status");


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
  price: {
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
    delivery: {
      delivery_type: {
        type: String,
        required: true,
        enum: Object.values(DELIVERY_TYPE),
      },
      delivery_status: {
        type: String,
        required: true,
        enum: Object.values(DELIVERY_STATUS),
      },
      delivery_price: {
        type: Number,
        default: 0,
        required: true,
      },
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
