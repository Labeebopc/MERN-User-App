import mongoose from "mongoose";
import { ProductSchema } from "../models/productModel.js";

const Product = mongoose.model('Product', ProductSchema)