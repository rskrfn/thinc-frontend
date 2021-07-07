// import { connect } from "react-redux";

import DashboardMember from "../../pages/dashboard/Member/DashboardMember";
import DashboardFacilitator from "../../pages/dashboard/Facilitator/DashboardFacilitator";
import { useSelector } from "react-redux";

function DashboardSwitch() {
  const userData = useSelector((state) => state.loginReducers);
  console.log(userData);
  return userData.data.data?.role === "Facilitator" ? (
    <DashboardFacilitator />
  ) : (
    <DashboardMember />
  );
}

export default DashboardSwitch;
