"user state"

import { User, Product } from "./model"
import connectToDB from "./utils";

export async function fetchUsers(q, page) {

    const regex = new RegExp(q, "i")
    const ITEM_PER_PAGE = 2
    try{
        connectToDB()
        // const count = 2;
        const user = await User.find({username:{$regex:regex}}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page-1));
        const count = await User.find({username:{$regex:regex}});
        return [user,count];
    }
    catch(err){
        console.log(err)
        throw new Error("Failed to fetch users")
    }
}
export async function fetchProducts(q, page) {
    
    const regex = new RegExp(q, "i")
    const ITEM_PER_PAGE = 2
    try{
        connectToDB()
        // const count = 2;
        const product = await Product.find({title:{$regex:regex}}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page-1));
        const count = await Product.find({title:{$regex:regex}});
        return [product,count];
    }
    catch(err){
        console.log(err)
        throw new Error("Failed to fetch products")
    }
}