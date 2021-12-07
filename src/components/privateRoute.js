import React from "react";
import { useAuth } from "../context/authContext";
import { Outlet, Navigate } from "react-router-dom";

function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();

  return currentUser ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;