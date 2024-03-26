import mongoose from "mongoose";


const userSchema=new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        min:5,
        max:20,
        trim:true
    },
    lastname:{
        type:String,
        required:true,
        min:5,
        max:20,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        min:5,
        max:20,
    },
    phonenumber:{
        type:String,
        required:true,
        min:10,
        unique:true,
        max:10,
        trim:true
    }
});


const user=mongoose.model('user',userSchema)

export default user;
