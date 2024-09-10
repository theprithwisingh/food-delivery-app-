import mongoose from "mongoose";

const orderScheme = new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    items:{
        type:Array,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default:"Food Processing"
    },
    date:{
        type:Date,
        default:Date.now()
    },
    payment:{
        type:Boolean,
        default:false
    }
})
const ordermodel = mongoose.models.order || mongoose.model("Food",orderScheme);

export default ordermodel;

/**/