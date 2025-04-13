import { handlers } from "@/auth" // Referring to the auth.ts we just created
import NextAuth from "next-auth"

const handler = NextAuth()

export { handler as GET, handler as POST }