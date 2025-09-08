import { Navigate, Outlet } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

const AuthWrapper = () => {
  const { value: token } = useLocalStorage("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default AuthWrapper;
