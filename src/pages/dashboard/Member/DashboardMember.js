import React, { useState } from "react";
import classes from "./DashboardMember.module.css";
import Sidebar from "../../../components/sidebar/Sidebar";
import Message from "../../../components/dashboard/messages/Message";
import FloatButton from "../../../components/dashboard/component/message_floating/FloatButton";
import DashboardLayout from "../../../components/dashboard/DashboardLayout";

function DashboardMember() {
  const [section, setSection] = useState(1);
  return (
    <main className={classes.maincontainer}>
      <div className={classes.content}>
        <section className={classes.sidebar}>
          <Sidebar section={section} setSection={setSection} />
        </section>
        <section className={classes.dashboard}>
          <DashboardLayout />
        </section>
        <section className={classes.messagebar}>
          <Message />
        </section>
      </div>
      <FloatButton className={classes.floatbtn} />
    </main>
  );
}

export default DashboardMember;
