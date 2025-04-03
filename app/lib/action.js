"use server"

import { revalidatePath } from "next/cache"
import { Product, User } from "./model"
import connectToDB from "./utils"
import { redirect } from "next/navigation"
import bcrypt from "bcrypt"

export const addUser = async (formData) => {
    const {username, email, password, phone, address, isAdmin, isActive} = Object.fromEntries(formData)
    
    const salt = await bcrypt.genSalt(10)
    const hashedPass = await bcrypt.hash(password,salt)
    try{
        connectToDB()
        const newUser = new User({
            username,
            email,
            password:hashedPass,
            phone,
            address,
            isAdmin,
            isActive,
        })

        await newUser.save()
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
    console.log(formData)
    try{
        connectToDB()
        const newProduct = new Product({
            title,
            price:parseFloat(price),
            stock:parseInt(stock),
            catagory,
            description,
            color,
            size,
        })

        await newProduct.save()
    }
    catch(err){
        console.log(err)
        throw new Error("Failed to create product")
    }
    revalidatePath("/dahsboard/products")
    redirect("/dahsboard/products")
}
