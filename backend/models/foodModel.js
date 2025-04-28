import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    description: { type: String },
    image: { type: String }
  }, { timestamps: true }); // <-- Add this part

foodSchema.index({ name: 'text', description: 'text' }); // text search
foodSchema.index({ price: 1 }); // price-based queries faster


const foodModel = mongoose.models.food || mongoose.model("food",foodSchema)

export default foodModel;