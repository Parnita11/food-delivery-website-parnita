import foodModel from "../models/foodModel.js"
import fs from 'fs'

// add food item

const addFood = async (req,res) => {
    console.log("File received:", req.file);  // Debugging log
    console.log("Body:", req.body);  // Debugging log

    if (!req.file) {
        return res.status(400).json({ success: false, message: "No file uploaded" });
    }

    let image_filename = `${req.file.filename}`;


    const food = new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })
    try {
        await food.save();
        res.json({success:true,message:"Food Added"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

// all food list
const listFood = async (req,res) => {
    try {
        const foods = await foodModel.find({});
        res.json({success:true,data:foods})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

// remove food item
const removeFood = async (req,res) => {
    try {
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`,()=>{})

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Food Removed"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

export const getTopSellingFoods = async (req, res) => {
    try {
      const topFoods = await foodModel.aggregate([ // aggregation function is used to get the top selling foods
        { $sort: { numOrders: -1 } },
        { $limit: 5 }
      ]);
      res.status(200).json(topFoods);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch top foods", error });
    }
  };
export const getAllFoods = async (req, res) => {
    try {
      const foods = await foodModel.find().populate('category'); // Populate added
      res.json(foods);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

const searchFood = async (req, res) => {
    try {
      const { keyword } = req.query;
      const foods = await foods.find({ $text: { $search: keyword } });
      res.json(foods);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
export {addFood, listFood, removeFood}