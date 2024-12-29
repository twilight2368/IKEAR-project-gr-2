const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    item: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "item",
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 0,
    },
    comment: {
      type: String,
      require: false,
    },
  },
  {
    timestamps: true,
  }
);

const CommentModel = mongoose.model("comment", CommentSchema);

module.exports = CommentModel;
