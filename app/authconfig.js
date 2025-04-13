export const authConfig = {
    // providers: [],
    pages:{
        signIn: "./login"
    },
    callBacks:{
        authorized({auth,request}){
            const isLoggedIn = auth?.user;
            const onDashhboard = request.nextUrl.pathname.startsWith("/dahsboard")
            if(onDashhboard){
                if (isLoggedIn) {
                    return true
                }
                else{
                    return false
                }
            }
            else if (isLoggedIn) {
                return Response.redirect(new URL("/dahsboard", request.nextUrl))
            }
            return true
        },
    }
}
