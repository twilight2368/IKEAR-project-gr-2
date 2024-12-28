const mongoose = require("mongoose");
const ROLE_LIST = require("../../constants/roles/role");

const phoneRegex =
  /^(?:\+?\d{1,3}[-.\s]?)?(?:\(?\d{2,4}\)?[-.\s]?)?\d{3,4}[-.\s]?\d{4}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const ROLES = [
  ROLE_LIST.ROLES.ADMIN,
  ROLE_LIST.ROLES.EMPLOYEE,
  ROLE_LIST.ROLES.MANAGER,
];

const EmployeeSchema = new mongoose.Schema(
  {
    store: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "store",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      validate: {
        validator: (value) => phoneRegex.test(value),
        message: "Invalid phone number format",
      },
    },
    email: {
      type: String,
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
    role: {
      type: String,
      enum: ROLES,
      required: true,
    },
  },
  { timestamps: true }
);

const EmployeeModel = mongoose.model("employee", EmployeeSchema);

module.exports = EmployeeModel;
