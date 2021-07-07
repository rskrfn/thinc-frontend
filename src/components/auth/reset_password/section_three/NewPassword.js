import React, { useState, useEffect } from "react";
import classes from "./NewPassword.module.css";
import InputComponent from "../input/InputComponent";
import { passwordValidation } from "../../../../services/validation/InputValidation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Modal from "../modal/Modal";

function NewPassword(props) {
  const { setSection, setIconSection, resetData, setResetData } = props;
  const [repeat, setRepeat] = useState("");
  const [warning, setWarning] = useState({
    newpasswordwarning: "",
    repeatwarning: "",
  });
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setIconSection(2);
  }, []);

  const submitHandler = () => {
    if (!resetData.newpassword || !repeat) {
      return toast.warn("Fill out all the form", {
        position: "top-center",
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
    if (
      warning.newpasswordwarning ||
      warning.repeatwarning !== "Password match"
    ) {
      return toast.error(warning.newpasswordwarning || warning.repeatwarning, {
        position: "top-center",
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
    let config = {
      method: "PATCH",
      url: `${process.env.REACT_APP_API_URL}/users/forgot`,
      data: {
        email: resetData.email,
        newpassword: resetData.newpassword,
      },
    };
    axios(config)
      .then((res) => {
        console.log("reset", { res });
        if (res.data?.message === "Password Changed") {
          setResetData({
            email: "",
            otp: "",
            newpassword: "",
          });
          setRepeat("");
          setWarning({
            newpasswordwarning: "",
            repeatwarning: "",
          });
          setModal(true);
        }
      })
      .catch((err) => {
        console.log("reseterror", { err });
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

  console.log("newpassword", resetData);
  return (
    <main className={classes.maincontainer}>
      {modal ? <Modal /> : null}
      <ToastContainer pauseOnFocusLoss={false} />
      <div className={classes.content}>
        <p className={classes.header}>Create New Password</p>
        <p className={classes.header2}>
          Your new password must be different from previous used password!
        </p>
        <div className={classes.formgroup}>
          <InputComponent
            id={"password"}
            type={"password"}
            name={"password"}
            placeHolder={"Enter your password"}
            label={"Password"}
            value={resetData.newpassword}
            warning={warning.newpasswordwarning}
            onchangeHandler={(e) => {
              setWarning({ ...warning, passwordwarning: "" });
              setResetData({ ...resetData, newpassword: e.target.value });
              setWarning({
                ...warning,
                newpasswordwarning: passwordValidation(e.target.value),
              });
            }}
          />
          <InputComponent
            id={"repeatpassword"}
            type={"repeatpassword"}
            name={"repeat password"}
            placeHolder={"Repeat your password"}
            label={"Repeat Password"}
            value={repeat}
            warning={warning.repeatwarning}
            onchangeHandler={(e) => {
              setWarning({ ...warning, repeatwarning: "" });
              setRepeat(e.target.value);
              setWarning({
                ...warning,
                repeatwarning: passwordValidation(
                  e.target.value,
                  resetData.newpassword
                ),
              });
            }}
          />
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

export default NewPassword;
