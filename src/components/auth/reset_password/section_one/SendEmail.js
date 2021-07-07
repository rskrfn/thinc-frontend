import React, { useState } from "react";
import classes from "./SendEmail.module.css";
import { emailValidation } from "../../../../services/validation/InputValidation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputComponent from "../input/InputComponent";
import axios from "axios";

function SendEmail(props) {
  const { setSection, resetData, setResetData } = props;
  const [warning, setWarning] = useState("");

  const submitHandler = () => {
    if (!resetData.email) {
      return toast.warn("Enter your email", {
        position: "top-center",
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
    if (warning) {
      return toast.warn(warning, {
        position: "top-center",
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
    let config = {
      method: "POST",
      url: `${process.env.REACT_APP_API_URL}/users/sendemail`,
      data: {
        email: resetData.email,
      },
    };
    axios(config)
      .then((res) => {
        console.log("sendemail", res);
        if (res.data?.message === "Email Sent") {
          return setSection(2);
        }
      })
      .catch((err) => {
        // console.log("sendemailerr", { err });
        if (err.response.data?.message === "User not found") {
          return toast.error("This email is not registered", {
            position: "top-center",
            autoClose: 5000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
        if (err.response.data?.status === 500) {
          return toast.error("Server Error", {
            position: "top-center",
            autoClose: 5000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
      });
  };
  return (
    <main className={classes.maincontainer}>
      <ToastContainer pauseOnFocusLoss={false} />
      <div className={classes.content}>
        <p className={classes.header}>Reset Password</p>
        <p className={classes.header2}>
          Enter your email address linked to this account
        </p>
        <p className={classes.helper}>
          We will send you the verification code to reset your password
        </p>
        <InputComponent
          id={"email"}
          type={"text"}
          placeHolder={"Enter your email address"}
          label={"Email"}
          value={resetData.email}
          warning={warning}
          onchangeHandler={(e) => {
            setWarning("");
            setResetData({ ...resetData, email: e.target.value });
            setWarning(emailValidation(e.target.value));
          }}
        />
        <button
          type="submit"
          className={classes.sendbtn}
          onClick={() => {
            submitHandler();
          }}
        >
          Send
        </button>
      </div>
    </main>
  );
}

export default SendEmail;
