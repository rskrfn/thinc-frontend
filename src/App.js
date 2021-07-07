import React from "react";
import { Switch } from "react-router-dom";
import {
  PrivateRoute,
  PrivateRouteAuth,
} from "./services/routing/PrivateRouting";
import { useSelector } from "react-redux";

// import Maintenance from "./pages/maintenance/Maintenance";

// auth pages
import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";
import ResetPassword from "./pages/auth/reset_password/ResetPassword";

// dashboard pages
import DashboardSwitch from "./services/routing/Dashboard";

// activity pages
import Activity from "./pages/activity/Activity";

// profile pages
import Profile from "./pages/profile/Profile";

// help pages
import Help from "./pages/help/Help";

function App() {
  const user = useSelector((state) => state.loginReducers);

  React.useEffect(() => {}, [user]);

  return (
    <Switch>
      <PrivateRouteAuth user={user} path="/" exact child={Login} />
      <PrivateRouteAuth user={user} path="/register" exact child={Register} />
      <PrivateRouteAuth
        user={user}
        path="/resetpassword"
        exact
        child={ResetPassword}
      />
      <PrivateRoute
        user={user}
        path="/dashboard"
        exact
        child={DashboardSwitch}
      />
      <PrivateRoute user={user} path="/activity" exact child={Activity} />
      <PrivateRoute user={user} path="/profile" exact child={Profile} />
      <PrivateRoute user={user} path="/help" exact child={Help} />
    </Switch>
  );
}

export default App;
