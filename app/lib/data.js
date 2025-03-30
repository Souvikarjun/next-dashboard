import { User } from "./model"
import connectToDB from "./utils";

export async function fetchUsers(q) {

    const regex = new RegExp(q, "i")
    try{
        connectToDB()
        const user = User.find({username:{$regex:regex}});
        return user
    }
    catch(err){
        console.log(err)
        throw new Error("Failed to fetch users")
    }
}