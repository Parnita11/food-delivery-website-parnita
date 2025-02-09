import mongoose from "mongoose";

export const connectDB = async () => {
    (await mongoose.connect('mongodb+srv://fullstack:<db_password>@cluster0.tuwbs.mongodb.net/full-del')).isObjectIdOrHexString(()=>console.log("DB connected"));
}