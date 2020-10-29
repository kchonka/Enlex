import React from "react";
import { Route } from "react-router-dom";
import { Home } from "../Home.js";
import { withAuthenticationRequired } from "@auth0/auth0-react";

const ProtectedRoute = ({ component, ...args }) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting:() => <Home/>
    })}
    {...args}
    />
);

export default ProtectedRoute;
