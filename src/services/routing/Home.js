import HomeMember from "../../pages/home/home_member/HomeMember";
import HomeFacilitator from "../../pages/home/home_facilitator/HomeFacilitator";
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
