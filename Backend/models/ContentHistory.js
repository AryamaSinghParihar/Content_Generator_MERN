const mongoose = require("mongoose");

//Schema
const historySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,  // track user who made the request
      ref: "User",
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Compile to form the model
const ContentHistory = mongoose.model("ContentHistory", historySchema);

module.exports = ContentHistory;
