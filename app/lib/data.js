import { User } from "./model"
import connectToDB from "./utils";

export async function fetchUsers() {
    try{
        connectToDB()
        const user = User.find();
        return user
    }
    catch(err){
        console.log(err)
        throw new Error("Failed to fetch users")
    }
}