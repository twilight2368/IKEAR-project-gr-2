const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    short_description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: false,
    },
    size: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const ItemModel = mongoose.model("item", ItemSchema);

module.exports = ItemModel;
