import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const ProductSchema = new Schema({
    name: { type: String, required: [true, "Please Enter Product Name"] },

    price: { type: Number, required: [true, "Please Enter Product Price"] },

    quantity: { type: Number, required: [true, "Please Enter Quantity"] },

    category: { type: String, required: [true, "Please Enter Product Category"] },

    // images: [{
    //     public_id: { type: String, required: true },
    //     url: { type: String, required: true },
    // }]

})