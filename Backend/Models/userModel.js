import mongoose from "mongoose";

const UserSchema=mongoose.Schema({
    username:{type: String, required: true, unique: true},
    password:{ type: String, required: true},
    name: { type: String, required: true},
    email: {type: String, required: true, unique: true},
    profilePicture: {type: String, default: ""},
    about: {type: String, default: ""},
    followers: {type: Array, default:[]},
    following: {type: Array, default:[]}
},{timestamps: true});

const userModel=mongoose.model("Users",UserSchema);

export default userModel;