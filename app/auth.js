import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./authconfig";
import connectToDB from "./lib/utils";
import { User } from "./lib/model";
import bcrypt from "bcrypt"

const login = async (credentials) => {

    try {
        connectToDB()
        const user = await User.findOne({username:credentials.username})

        if(!user) throw new Error("Wrong Credentials")
        
        const isPasswordCorrect = await bcrypt.compare(credentials.password , user.password)
        
        if(!isPasswordCorrect) throw new Error("Wrong Credentials")

        return user

    } catch (err) {
        console.log(err)
        throw new Error("Failed to login")
    }
}


export const { handlers,signIn, signOut, auth} = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            authorize: async (credentials) => {
                try {
                    const user = await login(credentials)
                    return user
                } catch (err) {
                    return null
                }
            }
        })
    ]
})