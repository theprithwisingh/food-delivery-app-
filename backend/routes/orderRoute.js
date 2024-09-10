import express from "express";
import authMiddleware from "../middleware/auth";
import { placeOrder } from "../controllers/orderController";
const orderRouter = express.Router();
orderRouter.post("/place",authMiddleware,placeOrder)

export default orderRouter;