import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

const CheckAuth = () => {
  const { authUser } = useAuthContext();

  if (!authUser) {
    {
      return <Navigate to="/admin" />;
    }
  }

  return <Outlet />;
};

export default CheckAuth;
