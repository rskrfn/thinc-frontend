import React, { useState } from "react";
import classes from "./HomeMember.module.css";
import Sidebar from "../../../components/sidebar/Sidebar";
import Message from "../../../components/dashboard/messages/Message";
import FloatButton from "../../../components/dashboard/component/message_floating/FloatButton";
import DashboardLayout from "../../dashboard/dashboard_member/DashboardMember";
import Profile from "../../profile/Profile";
import ActivityMember from "../../activity/member/ActivityMember";
import Help from "../../help/Help";

function HomeMember() {
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
            <ActivityMember />
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
            <DashboardLayout />
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

export default HomeMember;
