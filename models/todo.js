const mongoose = require("mongoose");
const { Schema } = mongoose;

const todoSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  shortDescription: {
    type: String,
    required: true,
  },
  dateTime: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "done"],
    default: "pending",
  },
});

module.exports = mongoose.model("Todo", todoSchema);
