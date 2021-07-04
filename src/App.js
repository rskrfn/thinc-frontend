import { Switch } from "react-router-dom";
import {
//   PrivateRoute,
  PrivateRouteAuth,
} from "./services/routing/PrivateRouting";
import { useSelector } from "react-redux";

// import Login from "./pages/auth/login/Login";
import Maintenance from "./pages/maintenance/Maintenance";

function App() {
  const user = useSelector((state) => state.loginReducers);
  console.log("app", user);
  return (
    <Switch>
      <PrivateRouteAuth path="/" exact component={Maintenance} />
    </Switch>
  );
}

export default App;
