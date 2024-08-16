import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
const mongoURL = process.env.MONGO_URI;

export const connectDB = async () => {
  try {
    await mongoose.connect(mongoURL);
    console.log("DB Connected");
  } catch (error) {
    console.error("DB Connection Error:", error);
  }
};
