import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
    },
    cardData:{
        type:Object,
        default:{}
    }
},{minimize:false})
const userModel = mongoose.models.user || mongoose.model("user",userSchema);
//Jab code pehli baar run hota hai, {mongoose.models.user} null hota hai (kyunki model ab tak bana nahi hota), toh{} mongoose.model("user", userSchema) }wala part model banata hai.
//Jab code dobara run hota hai, {mongoose.models.user} pehle se present hoga, toh naya model banane ke bajaye, pehle se bana model wapas mil jayega.

export default userModel;