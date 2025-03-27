import mongoose from "mongoose";

export default async function connectToDB(){

    const connection = {}
    try{
        if(connection.isConnected) return;
        const db = mongoose.connect(process.env.DATABASE_URL);
        connection.isConnected = (await db).connections[0].readyState;
    }
    catch(error){
        throw new Error(error);
    }
}