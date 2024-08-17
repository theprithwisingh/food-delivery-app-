// import foodModel from "../models/foodModel.js";
// import fs from "fs";
// import path from 'path';
// //add food items
// const addFood = async(req,res)=>{
// let image_filename=`${req.file.filename}`;

// const food=new foodModel({
//     name:req.body.name,
//     description:req.body.description,
//     price:req.body.price,
//     category:category,
//     image:image_filename
// })
// try {
//     await food.save();
//     res.json({sucess:true,message:"Food Added"})
// } catch (error) {
//     console.log(error);
//     res.json({sucess:false,message:"Error"})
// }
// }
// export{addFood}



//import {foodModel} from "../models/foodModel.js";
import foodModel from "../models/foodModel.js";

// Add food items
const addFood = async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ success: false, message: "No image file uploaded" });
    }

    let image_filename = req.file.filename;

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    });

    try {
        await food.save();
        res.json({ success: true, message: "Food Added" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error adding food" });
    }
};

export { addFood };
