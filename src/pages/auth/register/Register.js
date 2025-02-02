import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import googleIcon from "../../../assets/icons/icon_google.png";
import InputComponent from "../../../components/auth/component/input/InputComponent";
import Modal from "../../../components/auth/component/modal/Modal";
import {
  emailValidation,
  nameValidation,
  passwordValidation,
  usernameValidation,
} from "../../../services/validation/InputValidation";
import classes from "./Register.module.css";
function Register() {
  const [registerData, setRegisterData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    repeatpassword: "",
  });
  const [warning, setWarning] = useState({
    namewarning: "",
    usernamewarning: "",
    emailwarning: "",
    passwordwarning: "",
    repeatwarning: "",
  });
  const [modalStatus, setModalStatus] = useState(false);

  const submitHandler = () => {
    if (
      !registerData.name ||
      !registerData.username ||
      !registerData.email ||
      !registerData.password ||
      !registerData.repeatpassword
    ) {
      return toast.warn("Fill out all the form", {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
    if (
      warning.namewarning ||
      warning.usernamewarning ||
      warning.emailwarning ||
      warning.passwordwarning ||
      warning.repeatwarning !== "Password match"
    ) {
      return toast.error(
        warning.namewarning ||
          warning.usernamewarning ||
          warning.emailwarning ||
          warning.passwordwarning ||
          warning.repeatwarning,
        {
          position: "top-right",
          autoClose: 5000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );
    }
    let config = {
      method: "POST",
      url: `${process.env.REACT_APP_API_URL}/users/register`,
      data: {
        name: registerData.name,
        username: registerData.username,
        email: registerData.email,
        password: registerData.password,
      },
    };
    axios(config)
      .then((res) => {
        if (res.data?.message === "Registered Successfully") {
          setModalStatus(true);
          setRegisterData({
            name: "",
            username: "",
            email: "",
            password: "",
            repeatpassword: "",
          });
        }
      })
      .catch((error) => {
        console.log({ error });
        return toast.error("Error Occured", {
          position: "top-right",
          autoClose: 5000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      });
  };

  console.log("data", process.env.REACT_APP_API_URL);
  return (
    <>
      <ToastContainer pauseOnFocusLoss={false} />
      {modalStatus ? <Modal /> : null}
      <div className={classes.maincontainer}>
        <main className={classes.content}>
          <h1 className={classes.header}>Register</h1>
          <section>
            <InputComponent
              id={"name"}
              type={"text"}
              placeHolder={"Enter your full name"}
              label={"Full Name"}
              value={registerData.name}
              warning={warning.namewarning}
              onchangeHandler={(e) => {
                setWarning({ ...warning, namewarning: "" });
                setRegisterData({ ...registerData, name: e.target.value });
                setWarning({
                  ...warning,
                  namewarning: nameValidation(e.target.value),
                });
              }}
            />
            <InputComponent
              id={"username"}
              type={"text"}
              placeHolder={"Create a username"}
              label={"Username"}
              value={registerData.username}
              warning={warning.usernamewarning}
              onchangeHandler={(e) => {
                setWarning({ ...warning, usernamewarning: "" });
                setRegisterData({ ...registerData, username: e.target.value });
                setWarning({
                  ...warning,
                  usernamewarning: usernameValidation(e.target.value),
                });
              }}
            />
            <InputComponent
              id={"email"}
              type={"text"}
              placeHolder={"Enter your email address"}
              label={"Email"}
              value={registerData.email}
              warning={warning.emailwarning}
              onchangeHandler={(e) => {
                setWarning({ ...warning, emailwarning: "" });
                setRegisterData({ ...registerData, email: e.target.value });
                setWarning({
                  ...warning,
                  emailwarning: emailValidation(e.target.value),
                });
              }}
            />
            <InputComponent
              id={"password"}
              type={"password"}
              name={"password"}
              placeHolder={"Enter your password"}
              label={"Password"}
              value={registerData.password}
              warning={warning.passwordwarning}
              onchangeHandler={(e) => {
                setWarning({ ...warning, passwordwarning: "" });
                setRegisterData({ ...registerData, password: e.target.value });
                setWarning({
                  ...warning,
                  passwordwarning: passwordValidation(e.target.value),
                });
              }}
            />
            <InputComponent
              id={"repeatpassword"}
              type={"repeatpassword"}
              name={"repeat password"}
              placeHolder={"Repeat your password"}
              label={"Repeat Password"}
              value={registerData.repeatpassword}
              warning={warning.repeatwarning}
              onchangeHandler={(e) => {
                setWarning({ ...warning, repeatwarning: "" });
                setRegisterData({
                  ...registerData,
                  repeatpassword: e.target.value,
                });
                setWarning({
                  ...warning,
                  repeatwarning: passwordValidation(
                    e.target.value,
                    registerData.password
                  ),
                });
              }}
            />
          </section>

          <section className={classes.buttongroup}>
            <button
              type="submit"
              className={classes.btnlogin}
              onClick={() => {
                submitHandler();
              }}
            >
              Register
            </button>
            <Link to="/register" className={classes.btngoogle}>
              <img
                src={googleIcon}
                alt="google-icon"
                className={classes.googleicon}
              />
              Register with Google
            </Link>
          </section>
          <section className={classes.registercontainer}>
            <p className={classes.registertexthelper}>Already have account?</p>
            <Link to="/" className={classes.registerbtn}>
              Login
            </Link>
          </section>
        </main>
      </div>
    </>
  );
}

export default Register;
