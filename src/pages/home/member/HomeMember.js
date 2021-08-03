import React, { useState } from "react";
import classes from "./HomeMember.module.css";
import Sidebar from "../../../components/sidebar/Sidebar";
import Message from "../../../components/dashboard/messages/Message";
import FloatButton from "../../../components/dashboard/component/message_floating/FloatButton";
import DashboardLayout from "../../dashboard/dashboard_member/DashboardMember";
import Profile from "../../profile/Profile";
import ActivityMember from "../../activity/member/ActivityMember";
import Help from "../../help/Help";
import { useSelector } from "react-redux";

function HomeMember() {
  const page = useSelector((state) => state.pageReducers);
  const [section, setSection] = useState(1);
  const [modal, setModal] = useState({
    success: false,
    failed: false,
  });

  const RenderSection = () => {
    if (page.dashboard === true) {
      return (
        <div className={classes.dashboard}>
          <DashboardLayout />
          <Message />
        </div>
      );
    } else if (page.activity) {
      return (
        <>
          <ActivityMember />
        </>
      );
    } else if (page.help) {
      return (
        <>
          <Help />
        </>
      );
    } else if (page.profile) {
      return (
        <>
          <Profile />
        </>
      );
    }
  };
  // console.log(page);
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
