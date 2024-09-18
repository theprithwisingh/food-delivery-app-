import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config';
import cartRouter from "./routes/cartRoute.js";
import { placeOrder } from "./controllers/orderController.js";
import orderRouter from "./routes/orderRoute.js";
//Initialize Express app and set the port number
const app = express();
const port = 4002;

//Middleware to parse JSON and enable CORS for cross-origin requests
// app.use(express.json());
app.use(express.json()); // To parse JSON bodies
app.use(cors());

//Connect to the database
connectDB();

//Set up the API route for food-related operations
app.use("/api/food", foodRouter);
app.use("/images", express.static('uploads'))
app.use("api/user/",userRouter)
app.use("api/cart",cartRouter)
app.use("api/order",orderRouter)

//Root endpoint to verify if the API is working
app.get("/", (req, res) => {
   res.send("API i m Working");
});

//Start the server and listen on the specified port
app.listen(port, () => {
   console.log(`Server started on http://localhost:${port}`);
});