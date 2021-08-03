import React from "react";
import classes from "./ChangeAvatar.module.css";

function ChangeAvatar(props) {
  const { profile, profileData } = props;
  return (
    <main className={classes.maincontainer}>
      <section className={classes.mainsection}>
        <header>Change display picture</header>
        <img
          className={classes.avatar}
          src={profileData.display_picture}
          alt=""
        />
        <button className={classes.selectbtn}>Select</button>
        <container className={classes.btncontainer}>
          <button className={classes.savebtn}>Save</button>
          <button className={classes.cancelbtn}>Cancel</button>
        </container>
      </section>
      <section className={classes.unactive}></section>
    </main>
  );
}

export default ChangeAvatar;
