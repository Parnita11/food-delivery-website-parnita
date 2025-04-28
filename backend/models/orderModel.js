import mongoose from "mongoose"

const orderSchema = new mongoose.Schema({
    userId:{type:String,required:true},
    items:{type:Array,required:true},
    amount:{type:Number,required:true},
    address:{type:Object,required:true},
    status:{type:String,default:"Food Processing"},
    date:{type:Date,default:Date.now()},
    payment:{type:Boolean,default:false}
}, { timestamps: true })

orderSchema.index({ userId: 1 }); // optimize orders by user
orderSchema.index({ status: 1 }); // optimize filtering pending, delivered orders

const orderModel = mongoose.models.order || mongoose.model("order",orderSchema)
export default orderModel;