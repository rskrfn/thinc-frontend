import React from "react";
import { Route, Redirect } from "react-router-dom";

export function PrivateRoute({ child: Component, isLogin, user, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        user.data?.token ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}

export function PrivateRouteAuth({ child: Component, isLogin, user, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        !user.data?.token ? (
          <Component {...props} />
        ) : (
          <Redirect to="/home" />
        )
      }
    />
  );
}
