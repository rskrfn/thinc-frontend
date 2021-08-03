import React, { useState } from "react";
import classes from "./PersonalInformation.module.css";
import InputComponent from "../components/input/InputComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { nameValidation } from "../../../services/validation/InputValidation";
import { useSelector } from "react-redux";

function PersonalInformation(props) {
  const profileData = useSelector((state) => state.loginReducers.data);
  const { modal, setModal } = props;
  const [disabled, setDisabled] = useState({
    name: true,
    phone: true,
  });
  const [user, setUser] = useState({
    name: profileData.data.name,
    phone: profileData.data.phone,
  });
  const [warning, setWarning] = useState({
    name: "",
    phone: "",
  });

  return (
    <main className={classes.maincontainer}>
      <div className={classes.content}>
        <p className={classes.header}>Personal Information</p>
        <p className={classes.desc}>
          Click the icon on the right to edit your information
        </p>
        <div className={classes.inputgroup}>
          <InputComponent
            disabled={disabled.name}
            type={"text"}
            placeHolder={"Enter your full name"}
            label={"Full Name"}
            value={user.name}
            warning={warning.name}
            onchangeHandler={(e) => {
              setWarning({ ...warning, name: "" });
              setUser({ ...user, name: e.target.value });
              setWarning({
                ...warning,
                name: nameValidation(e.target.value),
              });
            }}
          />
          <button
            className={classes.editbtn}
            onClick={() => {
              setDisabled({ ...disabled, name: false });
            }}
          >
            <FontAwesomeIcon icon={faEdit} size="2x" color="#ada9bb" />
          </button>
        </div>
        <div className={classes.inputgroup}>
          <InputComponent
            disabled={disabled.phone}
            type={"phone"}
            placeHolder={"Enter phone number"}
            label={"Phone Number"}
            value={user.phone}
            warning={warning.phone}
            onchangeHandler={(e) => {
              //   setWarning({ ...warning, usernamewarning: "" });
              //   setLoginData({ ...loginData, username: e.target.value });
              //   setWarning({
              //     ...warning,
              //     usernamewarning: usernameemailValidation(e.target.value),
              //   });
            }}
          />
          <button
            className={classes.editbtn}
            onClick={() => {
              setDisabled({ ...disabled, phone: false });
            }}
          >
            <FontAwesomeIcon icon={faEdit} size="2x" color="#ada9bb" />
          </button>
        </div>

        <div className={classes.btncontainer}>
          <button className={classes.savebtn}>Save</button>
          <button
            className={classes.cancelbtn}
            onClick={() => {
              setModal({ ...modal, personal: false });
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </main>
  );
}

export default PersonalInformation;
