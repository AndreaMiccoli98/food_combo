import mongoose from 'mongoose'

let isConnected = false;
const mongoDbURI = process.env.MONGODB_URI ? process.env.MONGODB_URI : "";

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if (isConnected) {
        console.log("MongoDB già connesso");
        return;
    }

    try {
        await mongoose.connect(mongoDbURI, {
            dbName: "food_combo",
        })

        isConnected = true;
        console.log("MongoDB connesso")
    } catch (error) {
        throw new Error("Errore nella connessione a MongoDB: " + error)
    }
}