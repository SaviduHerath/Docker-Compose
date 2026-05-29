import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://Savidu2003:12345@ac-btjjvp0-shard-00-00.6azr9ef.mongodb.net:27017,ac-btjjvp0-shard-00-01.6azr9ef.mongodb.net:27017,ac-btjjvp0-shard-00-02.6azr9ef.mongodb.net:27017/?ssl=true&replicaSet=atlas-2x23xv-shard-0&authSource=admin&appName=Cluster0");     
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); 
  } 
};