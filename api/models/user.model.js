import { timeStamp } from "console";
import mongoose from "mongoose";
import { type } from "os";
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,

    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    avatar:{
        type:String,
        default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsynwv-5qtogtOwJbIjaPFJUmHpzhxgqIAug&s",
    }
},{
timeStamp:true});

const User=mongoose.model('User',userSchema);
export default User;