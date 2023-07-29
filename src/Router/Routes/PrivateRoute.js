import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { users, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="flex justify-center my-32">
        <progress className="progress w-56"></progress>
      </div>
    );
  }
  if (users?.email) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
