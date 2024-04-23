import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
    mongoose.set('strictQuery', true);

    // If the database is already connected, don't connect again
    if (connected) {
        console.log('MongoDB is already connected...');
        return;
    }

    // Connect to MongoDB
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        connected = true;
        console.log("MongoDB connected ....");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err.message);
        connected = false;
        throw err; // Throw the error for better error handling
    }
};

export default connectDB;
