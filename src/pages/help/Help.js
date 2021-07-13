import React, { useState } from "react";
import classes from "./Help.module.css";
import Sidebar from "../../components/sidebar/Sidebar";

function Help() {
  const [section, setSection] = useState(3);
  return (
    <main className={classes.maincontainer}>
      <div className={classes.content}>
        <section className={classes.setting}>
          <p>Help page</p>
        </section>
      </div>
    </main>
  );
}

export default Help;
