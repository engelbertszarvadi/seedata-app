import { Navigate } from "react-router-dom";
import { ProtectedRouteInterface } from "../../interfaces/interfaces";

export const ProtectedRoute = ({
  isLogged,
  redirectPath = "/",
  children,
}: ProtectedRouteInterface) => {
  if (!isLogged) {
    return <Navigate to={redirectPath} replace></Navigate>;
  }

  return children;
};
