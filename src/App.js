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

function App() {
  const user = useSelector((state) => state.loginReducers);
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
    </Switch>
  );
}

export default App;
