import React from "react";
import classes from "./Modal.module.css";

import { logoutAction } from "../../../redux/ActionCreators/Login";
import { resetAction } from "../../../redux/ActionCreators/Page";
import { useDispatch } from "react-redux";

function Modal(props) {
  const { setModal } = props;
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logoutAction());
    dispatch(resetAction());
    return;
  };

  //   console.log("modal", props);
  return (
    <>
      <main className={classes.maincontainer}>
        <section className={classes.content}>
          <h1 className={classes.header}>Logout</h1>
          <p className={classes.helper}>Are you sure?</p>
          <section className={classes.btngroup}>
            <p
              className={classes.btnprimarytext}
              onClick={() => {
                logoutHandler();
              }}
            >
              Yes
            </p>
            <p
              className={classes.btnsecondarytext}
              onClick={() => {
                setModal(false);
              }}
            >
              No
            </p>
          </section>
        </section>
      </main>
    </>
  );
}

export default Modal;
