import React from "react";
import classes from "./TokenModal.module.css";
import ExpiredIcon from "../../../assets/icons/icon_expired.svg";
import { useDispatch } from "react-redux";
import { logoutAction } from "../../../redux/ActionCreators/Login";
import { resetAction } from "../../../redux/ActionCreators/Page";

function TokenModal() {
  const dispatch = useDispatch();
  return (
    <main className={classes.maincontainer}>
      <section className={classes.content}>
        <img className={classes.icon} src={ExpiredIcon} alt="" />
        <h1 className={classes.header}>Session Expired</h1>
        <p className={classes.helper}>Re-login to continue</p>
        <button
          className={classes.btn}
          onClick={() => {
            dispatch(logoutAction());
            dispatch(resetAction());
          }}
        >
          Re-login
        </button>
      </section>
    </main>
  );
}

export default TokenModal;
