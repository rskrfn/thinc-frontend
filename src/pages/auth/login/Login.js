import React, { useState, useEffect } from "react";
import classes from "./Login.module.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputComponent from "../../../components/auth/component/input/InputComponent";
import {
  usernameemailValidation,
  passwordValidation,
} from "../../../services/validation/InputValidation";
import googleIcon from "../../../assets/icons/icon_google.png";
import { loginAction } from "../../../redux/ActionCreators/Login";
import { connect } from "react-redux";

function Login(props) {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [warning, setWarning] = useState({
    usernamewarning: "",
    passwordwarning: "",
  });

  const submitHandler = () => {
    if (!loginData.username || !loginData.password) {
      return toast.warn("Fill out all the form", {
        position: "top-center",
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
    if (warning.usernamewarning || warning.passwordwarning) {
      return toast.warn(warning.usernamewarning || warning.passwordwarning, {
        position: "top-center",
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
    props.onLoginHandler(loginData);
  };

  useEffect(() => {
    const { isRejected, isLoggedIn, err } = props.loginReducers;
    // console.log("logincek", err);
    if (err.data?.message === "Incorrect Email or Password") {
      return toast.error("Incorrect email or password", {
        position: "top-center",
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  }, [props.loginReducers]);

  console.log("props", props);
  return (
    <>
      <ToastContainer pauseOnFocusLoss={false} />
      <div className={classes.maincontainer}>
        <main className={classes.content}>
          <h1 className={classes.header}>Login</h1>
          <section>
            <InputComponent
              id={"username"}
              type={"text"}
              placeHolder={"Enter your email or username"}
              label={"Username or Email"}
              value={loginData.username}
              warning={warning.usernamewarning}
              onchangeHandler={(e) => {
                setWarning({ ...warning, usernamewarning: "" });
                setLoginData({ ...loginData, username: e.target.value });
                setWarning({
                  ...warning,
                  usernamewarning: usernameemailValidation(e.target.value),
                });
              }}
            />
            <InputComponent
              id={"password"}
              type={"password"}
              name={"password"}
              placeHolder={"Enter your password"}
              label={"Password"}
              value={loginData.password}
              warning={warning.passwordwarning}
              onchangeHandler={(e) => {
                setWarning({ ...warning, passwordwarning: "" });
                setLoginData({ ...loginData, password: e.target.value });
                setWarning({
                  ...warning,
                  passwordwarning: passwordValidation(e.target.value),
                });
              }}
            />
          </section>
          <Link to="/resetpassword" className={classes.forgotpassword}>
            Forgot password?
          </Link>
          <section className={classes.buttongroup}>
            <button
              type="submit"
              className={classes.btnlogin}
              onClick={() => {
                submitHandler();
              }}
            >
              Login
            </button>
            <Link to="/" className={classes.btngoogle}>
              <img
                src={googleIcon}
                alt="google-icon"
                className={classes.googleicon}
              />
              Login with Google
            </Link>
          </section>
          <section className={classes.registercontainer}>
            <p className={classes.registertexthelper}>New user?</p>
            <Link to="/register" className={classes.registerbtn}>
              Register
            </Link>
          </section>
        </main>
      </div>
    </>
  );
}

const mapStatetoProps = (state) => {
  const { loginReducers } = state;
  return {
    loginReducers,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    onLoginHandler: (data) => {
      dispatch(loginAction(data));
    },
  };
};

const connectedLogin = connect(mapStatetoProps, mapDispatchtoProps)(Login);

export default connectedLogin;
