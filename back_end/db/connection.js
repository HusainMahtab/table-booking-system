import mongoose from "mongoose";

const connectDB=async()=>{
   try {
    await mongoose.connect(process.env.MONGO_DB_URI)
    console.log("db conneted successfully")
   } catch (error) {
      console.error("db not connected !",error)
   }
}

export default connectDB