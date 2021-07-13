import React, { useState } from "react";
import classes from "./HomeFacilitator.module.css";
import Sidebar from "../../../components/sidebar/Sidebar";
import Message from "../../../components/dashboard/messages/Message";
import FloatButton from "../../../components/dashboard/component/message_floating/FloatButton";
import DashboardFacilitator from "../../dashboard/dashboard_facilitator/DashboardFacilitator";
import Profile from "../../profile/Profile";
import Activity from "../../activity/Activity";
import Help from "../../help/Help";

function HomeFacilitator() {
  const [section, setSection] = useState(1);

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
            <Activity />
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
