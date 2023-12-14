import mongoose from "mongoose";

//mini model of order item , we are not exporting it since it is not used anywhere else
const orderItemSchema=new mongoose.Schema({
    productId:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true,
        default:0
    }
},{timestamps:true})

const orderSchema=new mongoose.Schema({
    orderPrice:{
        type:Number,
        required:true
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    orderItems:{
        type: [orderItemSchema]
    },
    address:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["PENDING","CANCELLED","DELIVERED"],
        default: ["PENDING"]
    }


},{timestamps:true})

export const Order = mongoose.model("Order",orderSchema)