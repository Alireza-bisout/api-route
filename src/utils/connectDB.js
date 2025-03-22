import mongoose from "mongoose";

async function connectDB() {
    try {
        if (mongoose.connections[0].readyState) return

        await mongoose.connect(process.env.MONGO_URI)
        console.log("connected to the dataBese")
    } catch (error) {
        console.log("connection faild to the dataBase: ", error)
    }

}

export default connectDB;