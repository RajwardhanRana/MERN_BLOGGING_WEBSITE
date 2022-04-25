import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId=Schema.ObjectId;
const BlogPost = new Schema({
    author:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true,
        unique :true
    },
    text:{
        type:String,
        required:true
    }
})
const blog =mongoose.model("post" , BlogPost);
export default blog;