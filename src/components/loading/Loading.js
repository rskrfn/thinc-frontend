import React from "react";
import classes from "./Loading.module.css";
import RefreshIcon from "../../assets/refresh.svg";

function Loading(props) {
  return (
    <>
      <div
        className={
          props.background ? classes.loadingbackground : classes.loading
        }
      >
        <img className={classes.refreshicon} src={RefreshIcon} alt="" />
        <p className={classes.loadingtext}>{props.text || "Loading..."}</p>
      </div>
    </>
  );
}

export default Loading;
