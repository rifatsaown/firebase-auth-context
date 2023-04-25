import React from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../src/provider/UserProvider";

// eslint-disable-next-line react/prop-types
const PrivateRoutes = ({ children }) => {
  const { user, loading } = React.useContext(UserContext);

  if (loading) {
    return (
        <div className=" text-xl font-semibold text-center">
            <h1>Loading...</h1>
        </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" replace={true} />;
};

export default PrivateRoutes;
