"user state"

import { User } from "./model"
import connectToDB from "./utils";

export async function fetchUsers(q, page) {

    const regex = new RegExp(q, "i")
    const ITEM_PER_PAGE = 2
    try{
        connectToDB()
        // const count = 2;
        const user = User.find({username:{$regex:regex}}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page-1));
        return user;
    }
    catch(err){
        console.log(err)
        throw new Error("Failed to fetch users")
    }
}