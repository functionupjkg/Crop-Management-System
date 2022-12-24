import mongoose from "mongoose";

const fieldSchema = new mongoose.Schema(
  { fieldName: String, area: Number,region:ObjectId },
  { timestamps: true }
);

module.exports = mongoose.model("field", fieldSchema);
