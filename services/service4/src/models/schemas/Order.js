const mongoose = require("mongoose");

const OrderToItem = new mongoose.Schema({
  item: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },

  inventory: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "inventory",
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

const OrderSchema = new mongoose.Schema({
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
    required: true,
    update_at: {
      type: Date,
      default: Date.now,
    },
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  total_amount: {
    type: Number,
    required: true,
    min: 0,
  },
  total_items: {
    type: Number,
    required: true,
    min: 1,
  },
  item_inventory: [OrderToItem],
  delivery_type: {
    type: String,
    require: true,
  },
});

const OrderModel = mongoose.model("order", OrderSchema);

module.exports = OrderModel;
