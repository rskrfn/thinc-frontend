import React, { useState } from "react";
import classes from "./DashboardMember.module.css";
import Sidebar from "../../../components/sidebar/Sidebar";

function DashboardMember() {
  const [section, setSection] = useState(1);
  return (
    <main className={classes.maincontainer}>
      <div className={classes.content}>
        <section className={classes.sidebar}>
          <Sidebar section={section} setSection={setSection} />
        </section>
        <section className={classes.dashboard}>
          <p>Dashboard Member</p>
        </section>
        <section className={classes.messagebar}>
          <p>Message</p>
        </section>
      </div>
    </main>
  );
}

export default DashboardMember;
