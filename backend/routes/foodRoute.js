import express from "express";
import { addFood } from "../controllers/foodController.js";
import multer from "multer";

const foodRouter = express.Router();

//Image Storage Engine
const storage  = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cd)=>{
        return cd(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({ storage: storage });

foodRouter.post("/add",addFood)

// Create a route to handle image uploads
foodRouter.post("/add", upload.single("image"),addFood);
  
export default foodRouter;












































 
/*
import express from "express";
import { addFood } from "../controllers/foodController.js";
import multer from "multer";

const foodRouter = express.Router();

// Image Storage Engine
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage: storage });

// Combine the upload and addFood in one route
//foodRouter.post("/add", upload.single('image'), addFood);
foodRouter.post("/add",addFood)
// foodRouter.post("/add", upload.single('image'), addFood);

export default foodRouter;
*/ 
/*
// Importing necessary modules
import express from "express";
import { addFood } from "../controllers/foodController.js";
import multer from "multer";

// Create an Express router instance
const foodRouter = express.Router();

// Image Storage Engine configuration using multer
const storage = multer.diskStorage({
    destination: "uploads",  // Directory where the files will be stored
    filename: (req, File, cb) => {
        cb(null, `${Date.now()}-${File.originalname}`); // Setting the file name
    }
});

// Initializing multer with the configured storage
const upload = multer({ storage: storage });

// Combine the image upload and addFood in one route
// foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.post('/add', upload.single('image'), (req, res) => {
    if (req.fileValidationError) {
        return res.status(400).send(req.fileValidationError);
    } else if (!req.file) {
        return res.status(400).send('Please upload a file');
    } else if (err instanceof multer.MulterError) {
        return res.status(500).send(err.message);
    } else if (err) {
        return res.status(500).send(err.message);
    }

    addFood(req, res);
});


// Exporting the router
export default foodRouter;
*/ 