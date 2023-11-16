import { MongoClient } from "mongodb";

const DATABASE_URL = process.env.DATABASE_URL!


export const mongoClient = new MongoClient(DATABASE_URL);
export const dbConnect = async () => {
    try {
        await mongoClient.connect();
        console.log("Database connected");
    } catch (error) {
        console.log(error);
    }
};
