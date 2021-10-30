import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom"; 
import AuthContext from "../Store/auth-context";

const PrivateRoute = ({ component:Component, ...rest }) => {
  const contextData = useContext(AuthContext);
  
  return (
    <>
      <Route {...rest} render={(props) => contextData.isAuth ? 
        <Component {...props}/> : 
        <Redirect to="/login" />} />
    </>
  )
};

export default PrivateRoute;