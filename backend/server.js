import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";

//Initialize Express app and set the port number
const app = express();
const port = 4000;

//Middleware to parse JSON and enable CORS for cross-origin requests
app.use(express.json());
app.use(cors());

//Connect to the database
connectDB();

//Set up the API route for food-related operations
app.use("/api/food", foodRouter);

//Root endpoint to verify if the API is working
app.get("/", (req, res) => {
   res.send("API Working");
});

//Start the server and listen on the specified port
app.listen(port, () => {
   console.log(`Server started on http://localhost:${port}`);
});