import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import { UserSchema } from "../models/userModel.js";

const User = mongoose.model('User', UserSchema)

// Signup
export const Signup = async (req, res) => {
    const { name, email, password, place } = req.body;

    try {
        const existingUser = await User.findOne({ email: email })
        if (existingUser) {

            res.status(400).json({ message: "User Already Exist" })
        }
        if (!existingUser) {
            const hashedPassword = await bcrypt.hash(password, 12)

            const user = await User.create({ name, email, password: hashedPassword, place })

            res.status(201).json({ success: true, user, message: "Account Successfuly Created" })
        }

    } catch (error) {
        res.status(500).json({ success: false, error: error.message })
    }


}

// Login

export const Login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).json({ success: false, message: "Please provide email and password" })
    }

    try {
        const existingUser = await User.findOne({ email}).select("+password")
        if (!existingUser) {
            return res.status(404).json({ success: false, existingUser, message: "Invalid Credentials" })
        }
        
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        


        res.status(200).json({ result: existingUser, message: "Logged in" })


    } catch (error) {

        return res.status(500).json({ message: "Login Failed" })

    }


}