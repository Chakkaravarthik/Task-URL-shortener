import mongoose from "mongoose";

//schema creation 

const userSchema = new mongoose.Schema({
    id:{
        type:"String",
        required:true,
    },
    name:{
        type:"String",
        required:true,
    },
    email:{
        type:"String",
        required:true,
    },
    password:{
        type:"String",
        required:true,
    },
})

const userModel = new mongoose.model('user', userSchema, 'users');

const urlshortnerschema = new mongoose.Schema({
    id:{
        type:"String",
        required:true,
    },
    longurl:{
        type:"String",
        required:true,
    },
    shorturl:{
        type:"String",
        required:true,
    },
})

const shorturlModel = new mongoose.model('url', urlshortnerschema, 'urls');

export { userModel, shorturlModel };