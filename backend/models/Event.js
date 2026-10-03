const mongoose=require("mongoose");
module.exports=mongoose.model("Event",new mongoose.Schema({title:{type:String,required:true},date:{type:Date,required:true},time:String,venue:String,description:String,imageUrl:String,registrationLink:String,published:{type:Boolean,default:true}},{timestamps:true}));
