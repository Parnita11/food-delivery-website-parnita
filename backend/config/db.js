import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://fullstack:diya2348@cluster0.tuwbs.mongodb.net/food-del');
        console.log("DB connected");
    } catch (error) {
        console.error("DB connection error:", error);
    }
};
