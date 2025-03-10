import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const connectDB = async () => {
    try {
        // Correctly use process.env.MONGO_URI
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB");
        return {success:true,message:'mongodb connection is success'}
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        process.exit(1);  // Exit the process if the connection fails
    }
};

export {connectDB}
