"use server"

import { revalidatePath } from "next/cache"
import { Product, User } from "./model"
import connectToDB from "./utils"
import { notFound, redirect } from "next/navigation"
import bcrypt from "bcrypt"
import { fetchProducts } from "./data"

export const addUser = async (formData) => {
    const {username, email, password, phone, address, isAdmin, isActive} = Object.fromEntries(formData)
    
    const salt = await bcrypt.genSalt(10)
    const hashedPass = await bcrypt.hash(password,salt)
    try{
        connectToDB()
        const newUser = await new User({
            username,
            email,
            password:hashedPass,
            phone,
            address,
            isAdmin,
            isActive,
        })

        newUser.save()
    }
    catch(err){
        console.log(err)
        throw new Error("Failed to create user")
    }
    revalidatePath("/dahsboard/users")
    redirect("/dahsboard/users")
}

export const addProduct = async (formData) => {
    const {title, price, stock, catagory, description, color, size} = Object.fromEntries(formData)
    try{
        connectToDB()
        const newProduct = await new Product({
            title, price, stock, catagory, description, color, size,
        })

        newProduct.save()
    }
    catch(err){
        console.log(err)
        throw new Error("Failed to create Product")
    }
    revalidatePath("/dahsboard/products")
    redirect("/dahsboard/products")
}


export const deleteProduct = async (formData) => {
    const {id} = Object.fromEntries(formData)
    const products = await Product.find();
    async function deleteProd(){ await Product.findByIdAndDelete(id)};
    try{
        // for(let i = 0; i<3; i++){
            connectToDB();
            // if(products.includes() ){
                deleteProd()
            //     break;
            // }
            // setTimeout(console.log("retrying"),1000)
        // }
    }
    catch(err){
        console.log(err)
        throw new Error("Failed to delete product")
    }
    
    revalidatePath("/dahsboard/products")
    redirect("/dahsboard/products")
}


export const deleteUser = async (formData) => {
    const {id} = Object.fromEntries(formData)
    async function deleteUs(){ await User.findByIdAndDelete(id)};
    
    try{
        connectToDB();
        deleteUs();
    }
    catch(err){
        console.log(err)
        throw new Error("Failed to delete product")
    }
    revalidatePath("/dahsboard/users")
    redirect("/dahsboard/users")
}
