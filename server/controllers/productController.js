import mongoose from "mongoose";
import { ProductSchema } from "../models/productModel.js";

const Product = mongoose.model('Product', ProductSchema)

// Create Product - For Admin

export const createProduct = async (req, res)=>{
    const product = await Product.create(req.body)

    res.status(201).json({ success: true, product, message: "Product created Successfully" })
}


// Get all Products

export const getAllProducts = async (req, res)=>{
    const products = await Product.find();
    res.status(200).json({ success: true, products, message: "You are seeing Products" })
}

// Get Product Details (Single)

export const getProductDetails = async (req, res)=>{
    let product = await Product.findById(req.params.id)

    try {
        if (!product) {

            res.status(500).json({success: false, message: "Product Not Found" })
        }
        if (product) {

            res.status(200).json({ success: true, product, message: "Product Details" })
        }

    } catch (error) {
        res.status(500).json({ success: false, error: error.message })
    }

}


// Update Product - Admin

export const updateProduct = async (req, res)=>{
    let product = await Product.findById(req.params.id)

    try {
        if (!product) {

            res.status(500).json({success: false, message: "Product Not Found" })
        }
        if (product) {

            product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true, useFindAndModify: true})

            res.status(200).json({ success: true, product, message: "Product Successfuly Updated" })
        }

    } catch (error) {
        res.status(500).json({ success: false, error: error.message })
    }
}

// Delete Product - Admin

export const deleteProduct = async (req, res)=>{
    let product = await Product.findById(req.params.id)

    try {
        if (!product) {

            res.status(500).json({success: false, message: "Product Not Found" })
        }
        if (product) {

             await Product.remove()

            res.status(200).json({ success: true, message: "Product Successfuly Deleted" })
        }

    } catch (error) {
        res.status(500).json({ success: false, error: error.message })
    }
    
}

