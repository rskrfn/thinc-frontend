/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import classes from "./Verification.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function Verification(props) {
  const { setSection, setIconSection, resetData, setResetData } = props;
  const [code1, setCode1] = useState();
  const [code2, setCode2] = useState();
  const [code3, setCode3] = useState();
  const [code4, setCode4] = useState();
  const [code, setCode] = useState("");

  useEffect(() => {
    setIconSection(2);
    setResetData({ ...resetData, otp: "" });
  }, []);

  useEffect(() => {
    setCode([code1, code2, code3, code4].join(""));
    setResetData({ ...resetData, otp: code });
  }, [code, code1, code2, code3, code4]);

  const submitHandler = () => {
    if (!code1 || !code2 || !code3 || !code4) {
      return toast.warn("Enter all the code", {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
    setResetData({ ...resetData, otp: code });
    let config = {
      method: "POST",
      url: `${process.env.REACT_APP_API_URL}/users`,
      params: {
        email: resetData.email,
        otp: resetData.otp,
      },
    };
    axios(config)
      .then((res) => {
        // console.log("otpverif", res);
        if (res.data?.message === "OTP valid") {
          return setSection(3);
        }
      })
      .catch((err) => {
        // console.log("otpveriferr", { err });
        if (err.response.data?.message === "Wrong otp code") {
          return toast.error("Wrong verification code", {
            position: "top-right",
            autoClose: 5000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
        if (err.response.data?.status === 500) {
          return toast.error("Server Error", {
            position: "top-right",
            autoClose: 5000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
      });
  };

  // console.log("otpverif", resetData);
  return (
    <main className={classes.maincontainer}>
      <ToastContainer pauseOnFocusLoss={false} />
      <div className={classes.content}>
        <p className={classes.header}>Reset Password</p>
        <p className={classes.header2}>
          Enter verification code we just sent to your email address
        </p>
        <div className={classes.formgroup}>
          <input
            className={classes.input}
            type="text"
            maxLength={1}
            value={code1 || ""}
            onChange={(e) => {
              let reg = /^[0-9]$/;
              if (reg.test(e.target.value) === true) {
                return setCode1(e.target.value);
              } else {
                return setCode1("");
              }
            }}
          />
          <input
            className={classes.input}
            type="text"
            maxLength={1}
            value={code2 || ""}
            onChange={(e) => {
              let reg = /^[0-9]$/;
              if (reg.test(e.target.value) === true) {
                return setCode2(e.target.value);
              } else {
                return setCode2("");
              }
            }}
          />
          <input
            className={classes.input}
            type="text"
            maxLength={1}
            value={code3 || ""}
            onChange={(e) => {
              let reg = /^[0-9]$/;
              if (reg.test(e.target.value) === true) {
                return setCode3(e.target.value);
              } else {
                return setCode3("");
              }
            }}
          />
          <input
            className={classes.input}
            type="text"
            maxLength={1}
            value={code4 || ""}
            onChange={(e) => {
              let reg = /^[0-9]$/;
              if (reg.test(e.target.value) === true) {
                return setCode4(e.target.value);
              } else {
                return setCode4("");
              }
            }}
          />
        </div>
        <div className={classes.resend}>
          Didn’t receive a code?{" "}
          <p
            onClick={() => {
              setSection(1);
            }}
          >
            <span className={classes.resendbtn}>Resend</span>
          </p>
        </div>
        <button
          onClick={() => {
            submitHandler();
          }}
          className={classes.sendbtn}
        >
          Send
        </button>
      </div>
    </main>
  );
}

export default Verification;
