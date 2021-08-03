import React, { useState } from "react";
import eyeShow from "../../../../assets/icons/icon_eyeshow.png";
import eyeHide from "../../../../assets/icons/icon_eyehide.png";
import classes from "./InputComponent.module.css";

function InputComponent(props) {
  const {
    disabled,
    type,
    placeHolder,
    onchangeHandler,
    label,
    warning,
    value,
  } = props;
  const [show, setShow] = useState(false);
  if (type === "password" || type === "repeatpassword") {
    return (
      <>
        <div className={classes.container}>
          <div className={classes.formgroup}>
            <label>
              <span
                className={disabled ? classes.labeldisabled : classes.label}
              >
                {label}
              </span>
            </label>
            <input
              disabled
              className={classes.input}
              type={show ? "text" : "password"}
              placeholder={placeHolder}
              onChange={onchangeHandler}
              value={value}
            ></input>

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
  } else if (type === "phone") {
    return (
      <>
        <div className={classes.container}>
          <div className={classes.formgroup}>
            <label>
              <span
                className={disabled ? classes.labeldisabled : classes.label}
              >
                {label}
              </span>
            </label>
            <input
              disabled={disabled}
              className={disabled ? classes.inputdisabled : classes.input}
              type={type}
              placeholder={placeHolder}
              onChange={onchangeHandler}
              value={value}
            />
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
  return (
    <>
      <div className={classes.container}>
        <div className={classes.formgroup}>
          <label>
            <span className={disabled ? classes.labeldisabled : classes.label}>
              {label}
            </span>
          </label>
          <input
            disabled={disabled}
            className={disabled ? classes.inputdisabled : classes.input}
            type={type}
            placeholder={placeHolder}
            onChange={onchangeHandler}
            value={value}
          />
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
