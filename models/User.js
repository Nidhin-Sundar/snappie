import mongoose from "mongoose";

import { Schema,model,models } from "mongoose";

const UserSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
},
{timestamps:true}
);

const User = models.User || model('User', UserSchema);

export default User;
