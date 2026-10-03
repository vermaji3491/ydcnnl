const mongoose=require("mongoose");
module.exports=mongoose.model("Gallery",new mongoose.Schema({title:{type:String,required:true},category:String,description:String,imageUrl:{type:String,required:true},published:{type:Boolean,default:true}},{timestamps:true}));
