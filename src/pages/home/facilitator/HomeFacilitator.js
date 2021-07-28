import React, { useState, useEffect } from "react";
import classes from "./HomeFacilitator.module.css";
import Sidebar from "../../../components/sidebar/Sidebar";
import Message from "../../../components/dashboard/messages/Message";
import FloatButton from "../../../components/dashboard/component/message_floating/FloatButton";
import DashboardFacilitator from "../../dashboard/dashboard_facilitator/DashboardFacilitator";
import Profile from "../../profile/Profile";
import ActivityFacilitator from "../../activity/facilitator/ActivityFacilitator";
import Help from "../../help/Help";
import Loading from "../../../components/loading/Loading";
import axios from "axios";
import { useSelector } from "react-redux";
import TokenModal from "../../../components/token_modal/TokenModal";

function HomeFacilitator() {
  const token = useSelector((state) => state.loginReducers.data?.token);
  const [section, setSection] = useState(1);
  const [loadingText, setLoadingText] = useState("");
  const [loading, setLoading] = useState(false);
  const [tokenModal, setTokenModal] = useState(false);

  const tokencheck = () => {
    const config = {
      method: "GET",
      url: `${process.env.REACT_APP_API_URL}/users/token`,
      headers: { "x-access-token": token },
    };
    axios(config)
      .then((res) => {
        console.log(res);
        if (res.data?.message === "Token Valid") {
          setTokenModal(false);
          return;
        }
      })
      .catch((err) => {
        // console.log("token error", { err });
        if (
          err.response?.data?.message === "TokenExpiredError" ||
          err.response?.data?.message === "JsonWebTokenError"
        ) {
          setTimeout(() => {
            setTokenModal(true);
          }, 2000);
          return;
        }
      });
  };
  tokencheck();

  const RenderSection = () => {
    switch (section) {
      case 0:
        return (
          <>
            <Profile />
          </>
        );
      case 2:
        return (
          <>
            <ActivityFacilitator
              setLoading={setLoading}
              setLoadingText={setLoadingText}
            />
          </>
        );
      case 3:
        return (
          <>
            <Help />
          </>
        );
      default:
        return (
          <div className={classes.dashboard}>
            <DashboardFacilitator />
            <Message />
          </div>
        );
    }
  };
  return (
    <main className={classes.maincontainer}>
      {tokenModal ? <TokenModal /> : null}
      {loading ? (
        <div className={classes.loadingscreen}>
          <Loading text={loadingText} background={true} />
        </div>
      ) : null}
      <div className={classes.content}>
        <section className={classes.sidebar}>
          <Sidebar section={section} setSection={setSection} />
        </section>
        <section className={classes.maincontent}>{RenderSection()}</section>
      </div>
      <FloatButton className={classes.floatbtn} />
    </main>
  );
}

export default HomeFacilitator;
