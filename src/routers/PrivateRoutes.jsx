import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  // Redirect user to current location after login
  const location = useLocation();

  if (loading) {
    return <p>Loading......</p>;
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace={true}></Navigate>;
};

export default PrivateRoutes;
