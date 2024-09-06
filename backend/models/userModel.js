import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name:{
        type:string,
        require:true
    },
    email:{
        type:string,
        require:true,
        unique:true
    },
    password:{
        type:string,
        require:true,
    },
    cardData:{
        type:Object,
        default:{}
    }
},)
const userModel = mongoose.models.user || mongoose.model("user",userSchema);

export default userModel;