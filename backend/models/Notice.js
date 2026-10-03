const mongoose=require("mongoose");
module.exports=mongoose.model("Notice",new mongoose.Schema({title:{type:String,required:true},description:String,category:String,date:{type:Date,default:Date.now},pdfUrl:String,imageUrl:String,published:{type:Boolean,default:true}},{timestamps:true}));
