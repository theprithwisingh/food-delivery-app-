import express from "express";
import cors from "cors";
// const express = require("express");
// const cors = require("cors");
// const { connect } = require("mongoose");
import { connectDB } from "./config/db.js";

//app config
const app = express();
const port = 4003;

//middleware
app.use(express.json())
app.use(cors())

//db connection
connectDB();

//API
app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`)
})

//mongodb+srv://prithwisingh77:prithwi@139@cluster0.apq3a2d.mongodb.net/?