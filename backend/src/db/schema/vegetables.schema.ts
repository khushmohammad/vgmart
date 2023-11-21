import mongoose from "mongoose";

const vegetablesSchema = new mongoose.Schema({
  name: String,
  price: Number,
  unitPerPrice: Number,
  unit: String,
  quantity: Number,
  createdAt: String,
  updatedAt: String,
});

export const vegetables = mongoose.model("vegetables", vegetablesSchema);
