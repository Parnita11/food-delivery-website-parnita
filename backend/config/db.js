import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://greatstack:Diya2348@cluster0.addxm.mongodb.net/fullstack-project').then(()=>console.log("DB Connected"));
}