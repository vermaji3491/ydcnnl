const mongoose=require("mongoose");
module.exports=mongoose.model("Course",new mongoose.Schema({name:{type:String,required:true},code:String,duration:String,eligibility:String,seats:Number,fee:String,description:String,imageUrl:String,active:{type:Boolean,default:true}},{timestamps:true}));
