const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  user: {
    type: String,
    unique: true,
    required: true,
  },
  pass: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("users", UserSchema);
