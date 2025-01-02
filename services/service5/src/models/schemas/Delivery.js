const mongoose = require("mongoose");

const delivery_status = require("../../constants/delivery_status");

const DeliverySchema = new mongoose.Schema(
  {
    order: {
      type: mongoose.Schema.Types.ObjectId,
    },
    status: {
      type: String,
      enum: Object.values(delivery_status),
      default: delivery_status.PENDING,
    },
  },
  { timestamps: true }
);

const DeliveryModel = mongoose.model("delivery", DeliverySchema);

module.exports = DeliveryModel;
