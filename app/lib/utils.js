import mongoose from "mongoose"

export const connectToDB = async () => {

    const connection = {}

    try {
        if (connection.isConnected) return;
        const db = await mongoose.connect("mongodb+srv://admin:admin123admin@clusterone.7daaj.mongodb.net/dashboard?retryWrites=true&w=majority&appName=ClusterOne")
        connection.isConnected = db.connections[0].readyState;
    } catch (error) {
        throw new Error(error)
    }
}