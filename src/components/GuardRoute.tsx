import { Outlet, Navigate } from "react-router-dom";
import { useUser } from "../contexts/user";

const GuardRoute = () => {
  const userContext = useUser();

  if (!userContext?.state.user) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

export default GuardRoute;
