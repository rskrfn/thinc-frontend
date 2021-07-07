import React from "react";
import classes from "./Modal.module.css";

import { logoutAction } from "../../../redux/ActionCreators/Login";
import { connect } from "react-redux";

function Modal(props) {
  const { setModal } = props;

  const logoutHandler = () => {
    props.onLogoutHandler();
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

const mapDispatchtoProps = (dispatch) => {
  return {
    onLogoutHandler: () => dispatch(logoutAction()),
  };
};

const mapStateToProps = (state) => {
  return {
    loginReducer: state.loginReducer,
  };
};
const connectedModal = connect(mapStateToProps, mapDispatchtoProps)(Modal);
export default connectedModal;
