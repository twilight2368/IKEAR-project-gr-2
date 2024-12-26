const mongoose = require("mongoose");
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const AdminSchema = new mongoose.Schema(
  {
    admin: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      validate: {
        validator: (value) => emailRegex.test(value),
        message: "Invalid email format",
      },
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
  },
  { timestamps: true }
);

const AdminModel = mongoose.model("admin", AdminSchema);

module.exports = AdminModel;
