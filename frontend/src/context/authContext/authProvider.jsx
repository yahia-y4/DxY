import { AuthContext } from "./authContext";
import { useState } from "react";
import { getToken } from "../../auth/token";
export function AuthProvider({children}){
const [isAuth, setIsAuth] = useState(!!getToken());
    return(
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth
        }}>
            {children}
        </AuthContext.Provider>
    )
}