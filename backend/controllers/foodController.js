/*
import foodModel from "../models/foodModel.js";
import fs from "fs";
const addFood = async(req,res)=>{
let image_filename=`${req.filename}`;

const food=new foodModel({
    name:req.body.name,
    description:req.body.description,
    price:req.body.price,
    category:req.body.category,
    image:image_filename
})
try {
    await food.save();
    res.json({sucess:true,message:"Food Added"})
} catch (error) {
    console.log(error);
    res.json({sucess:false,message:"Error"})
}
}
export{addFood};

import foodModel from "../models/foodModel.js";
import fs from "fs";
import path from "path";
const addFood = async (req, res) => {
    const { name, description, price, category } = req.body;
    let image_filename = req.file ? req.file.filename : 'default_image.jpg';

    const food = new foodModel({
        name,
        description,
        price,
        category,
        image: image_filename
    });

    try {
        await food.save();
        res.json({ success: true, message: 'Food Added' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Error while adding food' });
    }
    console.log(req.body)
};
export{addFood};
*/ 
import foodModel from "../models/foodModel.js";
import fs from "fs";
import path from "path";  // for handling file paths

const addFood = async (req, res) => {
    const { name, description, price, category } = req.body;
    let image_filename = req.file.filename;

    const food = new foodModel({
        name,
        description,
        price,
        category,
        image: image_filename
    });

    try {
        await food.save();

        // Example: Remove old image if exists (assuming `req.body.old_image`)
        if (req.body.old_image) {
            const oldImagePath = path.join(__dirname, "../uploads", req.body.old_image);
            fs.unlink(oldImagePath, (err) => {
                if (err) console.log("Failed to delete old image:", err);
                else console.log("Old image deleted successfully");
            });
        }

        res.json({ success: true, message: 'Food Added' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Error while adding food' });
    }
    console.log(req.body);
};

export { addFood };

