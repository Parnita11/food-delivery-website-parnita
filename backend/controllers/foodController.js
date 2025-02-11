import foodModel from "../models/foodModel.js";
import fs from 'fs';

// Add food item
const addFood = async (req, res) => {
    if (!req.file) {
        return res.json({ success: false, message: "No image uploaded" });
    }

    let image_filename = `${req.file.filename}`;

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
        console.error(error);
        res.json({ success: false, message: "Error adding food" });
    }
};

export { addFood };
