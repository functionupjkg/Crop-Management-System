import mongoose from "mongoose";

const regionSchema = new mongoose.Schema(
  { regionName: String, property: ObjectId },
  { timestamps: true }
);

module.exports = mongoose.model("region", regionSchema);
