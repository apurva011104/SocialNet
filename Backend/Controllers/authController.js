import userModel from "../Models/userModel.js";
import bcrypt from 'bcrypt';


//Creating a new user
export const register= async(req,res)=>{
    const {username, password, name, email}=req.body;

    //Generating salt of password
    const genSalt= await bcrypt.genSalt(10);
    const hashedPass=await bcrypt.hash(password,genSalt);

    //Creating new user
    const newUser= new userModel({username, password: hashedPass, name, email});
    try{
        await newUser.save();
        res.status(200).json(newUser);
    }
    catch(err){
        res.status(500).json({message: err.message});

    }
};


//Logging a existing user
