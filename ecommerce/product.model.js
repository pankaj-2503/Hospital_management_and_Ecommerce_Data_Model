import mongoose from "mongoose";

const productSchema=new mongoose.Schema({
    description:{
        required:true,
        type:String 
    },
    name:{
        type:String,
        required:true
    },
    productImage:{
        type:String  // As generally url is given of image and pdf using some third party services
    },
    price:{
        type:Number,
        default:0
    },
    stock:{
        type:Number,
        default:0
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
        required:true
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    indianPricing:{
        type:Number,
        default:0,
        required:true
    },
    usdPricing:{
        type:Number,
        default:0,
        required:true
    }

},{timestamps:true})

export const Product=mongoose.model("Product",productSchema)