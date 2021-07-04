import React from "react";
import { Route, Redirect } from "react-router-dom";

export function PrivateRoute({ Component, isLogin, ...rest }) {
  const token = localStorage.token;
  return (
    <Route
      {...rest}
      render={(props) =>
        token ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}

export function PrivateRouteAuth({ Component, isLogin, ...rest }) {
  const token = localStorage.token;
  return (
    <Route
      {...rest}
      render={(props) =>
        !token ? (
          <Component {...props} />
        ) : (
          <Redirect to="/dashboard/all-schedule" />
        )
      }
    />
  );
}
