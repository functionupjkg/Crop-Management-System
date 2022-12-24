import mongoose from "mongoose";

const propertySchema = new mongoose.Schema(
  { propertyName: String, area: Number },
  { timestamps: true }
);

module.exports = mongoose.model("property", propertySchema);
