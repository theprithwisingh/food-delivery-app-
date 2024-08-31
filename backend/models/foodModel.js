import mongoose from "mongoose";

const foodScheme = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true,
        default:'default_image.jpg'
    }
})
const foodModel = mongoose.models.food || mongoose.model("Food",foodScheme);

export default foodModel;

/**/