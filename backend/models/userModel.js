import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    cartData:{type:Object,default:{}}
},{minimize:false, timestamps: true })

userSchema.index({ email: 1 }, { unique: true }); // quick lookup and enforce uniqueness

const userModel = mongoose.models.user || mongoose.model("user",userSchema);
export default userModel;