const mongoose = require("mongoose");
const COLORS = require("../../constants/item/color");
const SIZES = require("../../constants/item/size");

const HolidaySchema = new mongoose.Schema({
  name: String,
  image: String,
});

const ProductSchema = new mongoose.Schema({
  name: String,
  image: String,
});

const RoomSchema = new mongoose.Schema({
  name: String,
  image: String,
});

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
      enum: Object.values(COLORS),
    },
    size: {
      type: String,
      required: false,
      enum: Object.values(COLORS),
    },
    image: {
      type: [String],
      required: false,
    },
    holiday: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "holiday",
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
    },
    room: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "room",
    },
  },
  {
    timestamps: true,
  }
);

const ProductModel = mongoose.model("product", ProductSchema);
const RoomModel = mongoose.model("room", RoomSchema);
const HolidayModel = mongoose.model("holiday", HolidaySchema);
const ItemModel = mongoose.model("item", ItemSchema);

module.exports = {
  Item: ItemModel,
  Holiday: HolidayModel,
  Room: RoomModel,
  Product: ProductModel,
};
