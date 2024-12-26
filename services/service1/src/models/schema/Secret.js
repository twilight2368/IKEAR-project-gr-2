const mongoose = require("mongoose");

const SecretSchema = new mongoose.Schema({
  value: {
    type: String,
    required: true,
  },
});
const SecretModel = mongoose.model("secret", SecretSchema);
module.exports = SecretModel;
