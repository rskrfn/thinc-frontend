import React, { useState } from "react";
import eyeShow from "../../../../assets/icons/icon_eyeshow.png";
import eyeHide from "../../../../assets/icons/icon_eyehide.png";
import classes from "./InputComponent.module.css";

function InputComponent(props) {
  const { id, type, placeHolder, onchangeHandler, label, warning, value } =
    props;
  const [show, setShow] = useState(false);
  if (type === "password" || type === "repeatpassword") {
    return (
      <>
        <div className={classes.container}>
          <div className={classes.formgroup}>
            <input
              className={classes.input}
              id={id}
              type={show ? "text" : "password"}
              placeholder={placeHolder}
              onChange={onchangeHandler}
              value={value}
            ></input>
            <label>
              <span className={classes.label}>{label}</span>
            </label>
            <img
              className={classes.showpass}
              src={show ? eyeHide : eyeShow}
              onClick={() => setShow(!show)}
              alt=""
            ></img>
          </div>
          {warning ? (
            <p
              className={
                warning === "Password match"
                  ? classes.warningmatch
                  : classes.warning
              }
            >
              {warning}
            </p>
          ) : (
            <div className={classes.warningspacer} />
          )}
        </div>
      </>
    );
  }
  return (
    <>
      <div className={classes.container}>
        <div className={classes.formgroup}>
          <input
            className={classes.input}
            id={id}
            type={type}
            placeholder={placeHolder}
            onChange={onchangeHandler}
            value={value}
          />
          <label>
            <span className={classes.label}>{label}</span>
          </label>
        </div>
        {warning ? (
          <p className={classes.warning}>{warning}</p>
        ) : (
          <div className={classes.warningspacer} />
        )}
      </div>
    </>
  );
}

export default InputComponent;
