import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoute from './Routes/authRoute.js'

//Routes
const app=express();

//Middlewares
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/auth',authRoute);

dotenv.config();
const PORT=process.env.PORT;
const MONGO_URI=process.env.MONGO_URI;
mongoose
.connect(MONGO_URI)
.then(()=>{app.listen(PORT,()=>console.log("Server started"))})
.catch((err)=>console.log(err));
