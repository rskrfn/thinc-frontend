import React from "react";
import { Link } from "react-router-dom";
import classes from "./Modal.module.css";
import Checklist from "../../../../assets/icons/icon_reset3.png";

function Modal() {
  return (
    <>
      <main className={classes.maincontainer}>
        <section className={classes.content}>
          <h1 className={classes.header}>Registration Successful</h1>
          <img className={classes.icon} src={Checklist} alt="" />
          <Link to="/" className={classes.link}>
            Go to login page
          </Link>
        </section>
      </main>
    </>
  );
}

export default Modal;
