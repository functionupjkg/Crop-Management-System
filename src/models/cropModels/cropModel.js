import mongoose from "mongoose";

const cropSchema = new mongoose.Schema(
  { cropName: String, 
    season: String,
    seasonId: ObjectId },
  { timestamps: true }
);

module.exports = mongoose.model("crop", cropSchema);
