import { AuthContext } from "./authContext";
import { useAuthQuery } from "../../modules/account/queries/useAuthQuery";
import { getToken } from "../../auth/token";
import { useState } from "react";
export function AuthProvider({ children }) {
  const { data: user, isPending, isError } = useAuthQuery();
  const hasToken = !!getToken();
  const [isAuth, setIsAuth] = useState(hasToken);
  return (
    <AuthContext.Provider
      value={{
        user,
        isAuth,
        isLoading: hasToken && isPending,
        isError,
        setIsAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
