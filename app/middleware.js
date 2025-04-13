import NextAuth from "next-auth";
import { authConfig } from "./authconfig";
// import { matcher} from "next/dist/shared/lib/router/router";

export default NextAuth(authConfig).auth;

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.png).*)'],
}

// export { auth as middleware } from "@/app/auth"