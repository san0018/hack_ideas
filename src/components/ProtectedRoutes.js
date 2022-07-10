import { useContext } from "react";
import { authContext } from "../providers/AuthProvider";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRouts = () => {
  const { auth } = useContext(authContext);
  return auth.isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRouts;
