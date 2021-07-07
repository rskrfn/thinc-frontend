import React, { useState } from "react";
import classes from "./Profile.module.css";
import Sidebar from "../../components/sidebar/Sidebar";

function Profile() {
  const [section, setSection] = useState(0);
  return (
    <main className={classes.maincontainer}>
      <div className={classes.content}>
        <section className={classes.sidebar}>
          <Sidebar section={section} setSection={setSection} />
        </section>
        <section className={classes.profile}>
          <p>Profile page</p>
        </section>
      </div>
    </main>
  );
}

export default Profile;
