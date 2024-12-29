const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    short_description: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
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
