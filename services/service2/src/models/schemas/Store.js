const mongoose = require("mongoose");

const StoreSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    longitude: {
      type: String,
    },
    latitude: {
      type: String,
    },
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    weekdayOpen: {
      type: String,
    },
    weekdayClose: {
      type: String,
    },
    weekendOpen: {
      type: String,
    },
    weekendClose: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const StoreModel = mongoose.model("store", StoreSchema);

module.exports = StoreModel;
