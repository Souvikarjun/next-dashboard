import { User } from "@/app/lib/model"
import connectToDB from "@/app/lib/utils"
import CredentialsProvider from "next-auth/providers/credentials"

export const option = {
    providers: [
        CredentialsProvider({
            name:"credentials",
            credential : {
                username: {
                    lable: "username",
                    type : "text",
                    placeholder: "Username"
                },
            },
            async authorize(credentials){
                connectToDB()
                const user = User.findOne(username)
            }
        })
    ],
}