const mongoose = require("mongoose");

const InventorySchema = new mongoose.Schema(
  {
    store: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    item: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    quantity: {
      type: Number,
      min: 0,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

const InventoryModel = mongoose.model("inventory", InventorySchema);

module.exports = InventoryModel;
