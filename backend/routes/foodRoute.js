import express from "express"
import {addFood,listFood,removeFood,getTopSellingFoods} from "../controllers/foodController.js"
import multer from "multer"

const foodRouter = express.Router();

// Image Storage Engine

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

foodRouter.post("/add", upload.single("image"), (req, res, next) => {
    console.log("Multer File:", req.file); // Debugging
    console.log("Multer Body:", req.body); // Debugging
    next();
}, addFood);

foodRouter.get("/list",listFood)
foodRouter.post("/remove",removeFood);
foodRouter.get("/top-foods", getTopSellingFoods);

export default foodRouter;