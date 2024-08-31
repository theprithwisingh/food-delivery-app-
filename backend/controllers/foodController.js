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

//all food list 
const listFood =async(req,res)=>{
try {
    const foods = await foodModel.find({});
    res.json({success:true,data:foods})
} catch (error) {
    console.log(error);
    res.json({success:false, message:"Error"})
}
}

//delete food items
const removeFood = async(req,res)=>{
    try {
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`/uploads/${food.image}`,()=>{})
        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"food removed"})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
    }
}

export { addFood,listFood,removeFood };