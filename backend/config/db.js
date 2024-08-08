// import mongoose from "mongoose";

// export const connectDB = async()=>{
//     await mongoose.connect('mongodb+srv://prithwisingh77:prithwi@139@cluster0.apq3a2d.mongodb.net/food-delivery').then(()=>console.log("DB Connected"));
// }

import mongoose from "mongoose";
require('dotenv').config();
const mongoURL = process.env.MONGO_URI;


export const connectDB = async () => {
  try {
    await mongoose.connect(mongoURL);
    console.log("DB Connected");
  } catch (error) {
    console.error("DB Connection Error:", error);
  }
};
