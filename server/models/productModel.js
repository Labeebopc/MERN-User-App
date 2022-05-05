import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const ProductSchema = new Schema({
    name: {type: String, required: true},

    price: {type: Number, required: true},
    
    Quantity: {type: Number, required: true},

    category: {type: String, required: true}
  
})