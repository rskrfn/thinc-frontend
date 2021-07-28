import React, { useState } from "react";
import classes from "./NewClass.module.css";
import {
  DatePicker,
  TimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core/styles";
import MomentUtils from "@date-io/moment";
import moment from "moment";
import { inputValidation } from "../../../services/validation/InputValidation";

function NewClass(props) {
  const { newclass, setNewClass, createNewClass, warning, setWarning } = props;
  const [priceRadio, setPriceRadio] = useState(0);
  const [picker, setPicker] = useState({
    datepicker: false,
    startpicker: false,
    endpicker: false,
  });
  const datepickertheme = createTheme({
    overrides: {
      MuiPickersToolbar: {
        toolbar: {
          backgroundColor: "rgba(87, 132, 186, 1)",
        },
      },
      MuiPickersDay: {
        day: {
          color: "rgba(120, 120, 120, 1)",
        },
        daySelected: {
          backgroundColor: "rgba(87, 132, 186, 1)",
        },
        dayDisabled: {
          color: "rgba(120, 120, 120, 1)",
        },
        current: {
          color: "rgba(87, 132, 186, 1)",
        },
      },
      MuiButton: {
        textPrimary: {
          color: "rgba(87, 132, 186, 1)",
        },
      },
    },
  });

  // console.log("newcoursedata", { courseData });
  // console.log("coba moment", newclass.start._d);
  return (
    <main className={classes.maincontainer}>
      <div className={classes.content}>
        <p className={classes.header}>Create New Class</p>
        <div className={classes.container}>
          <section className={classes.uppersection}>
            <div className={classes.upperleft}>
              <div className={classes.inputgroup}>
                <div className={classes.input}>
                  <p className={classes.headernewclass}>Class name</p>
                  <p className={classes.headercolumn}>:</p>
                  <input
                    className={classes.inputbox}
                    value={newclass.coursename}
                    onChange={(e) => {
                      setWarning({
                        ...warning,
                        coursename: "",
                      });
                      setNewClass({ ...newclass, coursename: e.target.value });
                      setWarning({
                        ...warning,
                        coursename: inputValidation(
                          "coursename",
                          e.target.value
                        ),
                      });
                    }}
                  />
                </div>
                {warning.coursename ? (
                  <p className={classes.warningtext}>{warning.coursename}</p>
                ) : null}
                <div className={classes.input}>
                  <p className={classes.headernewclass}>Category</p>
                  <p className={classes.headercolumn}>:</p>
                  <select
                    className={classes.inputdropdown}
                    name="category"
                    onChange={(e) => {
                      setWarning({
                        ...warning,
                        category: "",
                      });
                      setNewClass({
                        ...newclass,
                        categories: e.target.value,
                      });
                      setWarning({
                        ...warning,
                        category: inputValidation("category", e.target.value),
                      });
                    }}
                  >
                    <option value={0} selected disabled hidden>
                      Categories
                    </option>
                    <option value={1}>Software</option>
                    <option value={2}>History</option>
                    <option value={3}>Psychology</option>
                    <option value={4}>Finance</option>
                    <option value={5}>Mathematics</option>
                    <option value={6}>Science</option>
                  </select>
                </div>
                {warning.category ? (
                  <p className={classes.warningtext}>{warning.category}</p>
                ) : null}
                <div className={classes.input}>
                  <p className={classes.headernewclass}>Level</p>
                  <p className={classes.headercolumn}>:</p>
                  <select
                    className={classes.inputdropdown}
                    name="level"
                    onChange={(e) => {
                      setWarning({
                        ...warning,
                        level: "",
                      });
                      setNewClass({
                        ...newclass,
                        level: e.target.value,
                      });
                      setWarning({
                        ...warning,
                        level: inputValidation("level", e.target.value),
                      });
                    }}
                  >
                    <option value={0} selected disabled hidden>
                      Level
                    </option>
                    <option value={1}>Beginner</option>
                    <option value={2}>Intermediate</option>
                    <option value={3}>Advance</option>
                  </select>
                </div>
                {warning.level ? (
                  <p className={classes.warningtext}>{warning.level}</p>
                ) : null}
              </div>
            </div>
            <div className={classes.upperright}>
              <div className={classes.inputgroup}>
                <div className={classes.input}>
                  <p className={classes.headernewclass}>Price</p>
                  <p className={classes.headercolumn}>:</p>
                  <div className={classes.radiogroup}>
                    <input
                      type="Radio"
                      id="Free"
                      name="price"
                      className={classes.radiobtn}
                      defaultChecked={true}
                      onClick={() => {
                        setPriceRadio("free");
                        setNewClass({ ...newclass, price: 0 });
                        setWarning({
                          ...warning,
                          price: "",
                        });
                      }}
                    />
                    <label htmlFor="Free">Free</label>
                  </div>
                  <div className={classes.radiogroup}>
                    <input
                      type="Radio"
                      id="Paid"
                      name="price"
                      className={classes.radiobtn}
                      onClick={() => {
                        setPriceRadio("paid");
                        setNewClass({
                          ...newclass,
                          price: "",
                        });
                      }}
                    />
                    <label htmlFor="Paid">Paid</label>
                  </div>
                  {priceRadio === "paid" ? (
                    <div className={classes.radiogroup}>
                      <p className={classes.headernewclass}>$</p>
                      <input
                        id="priceinput"
                        className={classes.priceinput}
                        value={newclass.price}
                        placeholder="10"
                        inputMode="numeric"
                        onChange={(e) => {
                          let reg = /^[0-9]+$(\.0-9+)?/;
                          if (!reg.test(e.target.value)) {
                            setNewClass({
                              ...newclass,
                              price: "",
                            });
                            return;
                          } else if (reg.test(e.target.value)) {
                            setWarning({
                              ...warning,
                              price: "",
                            });
                            setNewClass({
                              ...newclass,
                              price: e.target.value,
                            });
                            setWarning({
                              ...warning,
                              price: inputValidation("price", e.target.value),
                            });
                          }
                        }}
                      />
                    </div>
                  ) : null}
                </div>
                {warning.price ? (
                  <p className={classes.warningtext}>{warning.price}</p>
                ) : null}
              </div>
              <div className={classes.input}>
                <p className={classes.headernewclass}>Schedule</p>
                <p className={classes.headercolumn}>:</p>
                <button
                  className={classes.inputdate}
                  onClick={() => {
                    setPicker({ ...picker, datepicker: true });
                  }}
                >
                  {moment(newclass.schedule).format("dddd")}
                </button>
                <MuiPickersUtilsProvider utils={MomentUtils}>
                  <ThemeProvider theme={datepickertheme}>
                    <DatePicker
                      variant="dialog"
                      okLabel="SET"
                      value={newclass.schedule}
                      open={picker.datepicker}
                      onOpen={() => setPicker({ ...picker, datepicker: true })}
                      onClose={() =>
                        setPicker({ ...picker, datepicker: false })
                      }
                      onChange={(value) => {
                        setNewClass({ ...newclass, schedule: value });
                      }}
                      TextFieldComponent={() => null}
                    />
                  </ThemeProvider>
                </MuiPickersUtilsProvider>
                <button
                  className={classes.inputtime}
                  onClick={() => {
                    setPicker({ ...picker, startpicker: true });
                  }}
                >
                  {moment(newclass.start).format("HH : mm")}
                </button>
                <MuiPickersUtilsProvider utils={MomentUtils}>
                  <ThemeProvider theme={datepickertheme}>
                    <TimePicker
                      variant="dialog"
                      okLabel="SET"
                      value={newclass.start}
                      open={picker.startpicker}
                      onOpen={() => setPicker({ ...picker, startpicker: true })}
                      onClose={() =>
                        setPicker({ ...picker, startpicker: false })
                      }
                      onChange={(value) => {
                        setNewClass({ ...newclass, start: value });
                      }}
                      TextFieldComponent={() => null}
                    />
                  </ThemeProvider>
                </MuiPickersUtilsProvider>
                <p className={classes.separator}> - </p>
                <button
                  className={classes.inputtime}
                  onClick={() => {
                    setPicker({ ...picker, endpicker: true });
                  }}
                >
                  {moment(newclass.end).format("HH : mm")}
                </button>
                <MuiPickersUtilsProvider utils={MomentUtils}>
                  <ThemeProvider theme={datepickertheme}>
                    <TimePicker
                      variant="dialog"
                      okLabel="SET"
                      value={newclass.end}
                      open={picker.endpicker}
                      onOpen={() => setPicker({ ...picker, endpicker: true })}
                      onClose={() => setPicker({ ...picker, endpicker: false })}
                      onChange={(value) => {
                        setWarning({
                          ...warning,
                          end: "",
                        });
                        setNewClass({ ...newclass, end: value });
                        setWarning({
                          ...warning,
                          end: inputValidation("time", value, newclass.start),
                        });
                      }}
                      TextFieldComponent={() => null}
                    />
                  </ThemeProvider>
                </MuiPickersUtilsProvider>
              </div>
              {warning.schedule || warning.start || warning.end ? (
                <p className={classes.warningtext}>
                  {warning.coursename || warning.start || warning.end}
                </p>
              ) : null}
            </div>
          </section>
          <section className={classes.bottomsection}>
            <div className={classes.headerarea}>
              <p className={classes.headernewclass}>Description</p>
              <p className={classes.headercolumn}>:</p>
            </div>
            <textarea
              className={classes.inputarea}
              rows={5}
              value={newclass.description}
              onChange={(e) => {
                setWarning({ ...warning, description: "" });
                setNewClass({ ...newclass, description: e.target.value });
                setWarning({
                  ...warning,
                  description: inputValidation("description", e.target.value),
                });
              }}
            />
            {warning.description ? (
              <p className={classes.warningtext}>{warning.description}</p>
            ) : null}
          </section>

          <section className={classes.buttonsection}>
            <button
              className={classes.submitbtn}
              onClick={() => {
                createNewClass();
              }}
            >
              Create
            </button>
          </section>
        </div>
      </div>
    </main>
  );
}

export default NewClass;
