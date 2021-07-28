import React from "react";
import classes from "./Profile.module.css";

function Profile() {
  return (
    <main className={classes.maincontainer}>
      <div className={classes.content}>
        <section className={classes.profile}>
          <p>Profile page</p>
        </section>
      </div>
    </main>
  );
}

export default Profile;
