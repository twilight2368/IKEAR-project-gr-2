const mongoose = require("mongoose");

const InventorySchema = new mongoose.Schema(
  {
    store: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "store",
      require: true,
    },
    item: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "item",
      require: true,
    },
    quantity: {
      type: Number,
      min: 0,
      require: true,
      default: 0,
    },
  },
  { timestamps: true }
);

const InventoryModel = mongoose.model("inventory", InventorySchema);

module.exports = InventoryModel;
