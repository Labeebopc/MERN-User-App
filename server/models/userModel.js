import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    name: {type: String, required: [true, "Please provide a name"]},

    email: {type: String, required: [true, "Please provide your email"], unique: true},
    
    password: {type: String, required: true, minlength:6, select: false},

    place: {type: String, required: [true, "Please provide a place"]}
  


})