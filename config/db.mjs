import mongoose from "mongoose";
import { DB_NAME } from "../constants/constant.mjs";

export const connectDB = async() => {
    try{
        // const connnectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        const connnectionInstance = await mongoose.connect(`${process.env.MONGODB_CLOUD_URI}/${DB_NAME}`)
        console.log(`Connected to ${connnectionInstance.connection.host}`)
    }catch(err){
        console.log(`Error: ${err.message}`);
    }
}