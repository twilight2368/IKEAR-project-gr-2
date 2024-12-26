const mongoose = require("mongoose");
const countryList = require("../data/country.json");
const phoneRegex =
  /^(?:\+?\d{1,3}[-.\s]?)?(?:\(?\d{2,4}\)?[-.\s]?)?\d{3,4}[-.\s]?\d{4}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    phone: {
      type: String,
      required: true,
      validate: {
        validator: (value) => phoneRegex.test(value),
        message: "Invalid phone number format",
      },
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: (value) => emailRegex.test(value),
        message: "Invalid email format",
      },
    },
    country: {
      type: String,
      required: true,
      enum: countryList,
    },
    city: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    store: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "store",
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;
