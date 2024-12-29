const mongoose = require("mongoose");

const FavSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "user",
    },
    item: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "item",
    },
  },
  {
    timestamps: true,
  }
);

const FavModel = mongoose.model("fav", FavSchema);

module.exports = FavModel;
