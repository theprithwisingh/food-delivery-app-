import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";

//app config
const app = express();
const port = 4004;

//middleware
app.use(express.json());
app.use(cors());

//db connection
connectDB();

//API endPoint
app.use("/api/food",foodRouter);

//API
app.get("/",(req,res)=>{
    res.send("API Working");
})

app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`);
})

//mongodb+srv://prithwisingh77:prithwi@139@cluster0.apq3a2d.mongodb.net/?
