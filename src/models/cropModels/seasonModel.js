import mongoose from "mongoose";

const seasonSchema = new mongoose.Schema(
  { seasonName: String, duration: Number },
  { timestamps: true }
);

module.exports = mongoose.model("season", seasonSchema);
