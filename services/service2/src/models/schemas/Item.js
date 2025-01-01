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
      enum: Object.values(SIZES),
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
