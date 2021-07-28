import HomeMember from "../../pages/home/member/HomeMember";
import HomeFacilitator from "../../pages/home/facilitator/HomeFacilitator";
import { useSelector } from "react-redux";

function MainPage() {
  const userData = useSelector((state) => state.loginReducers);
  // console.log(userData);
  return userData.data.data?.role === "Facilitator" ? (
    <HomeFacilitator />
  ) : (
    <HomeMember />
  );
}

export default MainPage;
