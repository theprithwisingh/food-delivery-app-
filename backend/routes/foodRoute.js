import express from "express";
import { addFood } from "../controllers/foodController";
import multer from "multer";

const foodRouter = express.Router();
//Image Storage Engine
const storage  =multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cd)=>{
        return cd(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({ storage: storage });
foodRouter.post("/add",addFood)





export default foodRouter;