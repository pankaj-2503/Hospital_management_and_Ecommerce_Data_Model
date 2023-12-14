import mongoose from "mongoose";

// const worksInHospitalsHours
const doctorSchema=new mongoose.Schema({
   name:{
    type:String,
    required:true
   },
   salary:{
    type:Number,
    required:true,
   },
   qualification:{
    type:String,
    require:true
   },
   experiencInYears:{
    type:Number,
    default:0
   },
   worksInHospitals:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Hospital"
    }
   ]
},{timestamps:true})

export const Doctor=mongoose.model("Doctor",doctorSchema)