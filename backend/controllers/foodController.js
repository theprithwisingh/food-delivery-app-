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
*/ 
import foodModel from "../models/foodModel.js";
import fs from "fs";
const addFood = async (req, res) => {
    const { name, description, price, category } = req.body;

    // if (!name || !description || !price || !category) {
    //     return res.status(400).json({
    //         success: false,
    //         message: 'All fields are required: name, description, price, category'
    //     });
    // }

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