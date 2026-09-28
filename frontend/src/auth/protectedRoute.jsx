import { useAuth } from "../context/authContext/useAuth";
import { Navigate, Outlet } from "react-router-dom";
import LoadingAll from "../components/loadingAll/loadingAll";
export default function ProtectedRoute(){
    const {isLoading , isAuth} = useAuth();
    
  if (isLoading) {
    return <LoadingAll/>;
  }

  if (!isAuth) {
    return <Navigate to="/account" replace />;
  }

  return <Outlet />;
}
