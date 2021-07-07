import React, { useState } from "react";
import classes from "./Activity.module.css";
import Sidebar from "../../components/sidebar/Sidebar";

function Activity() {
  const [section, setSection] = useState(2);
  return (
    <main className={classes.maincontainer}>
      <div className={classes.content}>
        <section className={classes.sidebar}>
          <Sidebar section={section} setSection={setSection} />
        </section>
        <section className={classes.activity}>
          <p>Activity Page</p>
        </section>
      </div>
    </main>
  );
}

export default Activity;
