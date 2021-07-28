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

function NewClass() {
  const [priceRadio, setPriceRadio] = useState(0);
  const [picker, setPicker] = useState({
    datepicker: false,
    startpicker: false,
    endpicker: false,
  });
  const [courseData, setCourseData] = useState({
    classname: "",
    categories: "",
    price: 0,
    level: "",
    schedule: new Date(),
    start: new Date(),
    end: new Date(),
    description: "",
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
      MuiPickersModal: {
        dialogAction: {
          color: "rgba(87, 132, 186, 1)",
        },
      },
    },
  });

  console.log("newcoursedata", { courseData });
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
                  <input className={classes.inputbox} />
                </div>
                <div className={classes.input}>
                  <p className={classes.headernewclass}>Category</p>
                  <p className={classes.headercolumn}>:</p>
                  <select className={classes.inputdropdown} name="category">
                    <option value={null}>Categories</option>
                    <option value={1}>Software</option>
                    <option value={2}>History</option>
                    <option value={3}>Psychology</option>
                    <option value={4}>Finance</option>
                    <option value={5}>Mathematics</option>
                    <option value={6}>Science</option>
                  </select>
                </div>
                <div className={classes.input}>
                  <p className={classes.headernewclass}>Level</p>
                  <p className={classes.headercolumn}>:</p>
                  <select className={classes.inputdropdown} name="category">
                    <option value={null}>Level</option>
                    <option value={1}>Beginner</option>
                    <option value={2}>Intermediate</option>
                    <option value={3}>Advance</option>
                  </select>
                </div>
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
                        setCourseData({ ...courseData, price: 0 });
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
                        placeholder="10"
                        inputMode="numeric"
                        onChange={(e) => {
                          setCourseData({
                            ...courseData,
                            price: e.target.value,
                          });
                        }}
                      />
                    </div>
                  ) : null}
                </div>
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
                  {moment(courseData.schedule).format("dddd")}
                </button>
                <MuiPickersUtilsProvider utils={MomentUtils}>
                  <ThemeProvider theme={datepickertheme}>
                    <DatePicker
                      variant="dialog"
                      okLabel="SET"
                      value={courseData.schedule}
                      open={picker.datepicker}
                      onOpen={() => setPicker({ ...picker, datepicker: true })}
                      onClose={() =>
                        setPicker({ ...picker, datepicker: false })
                      }
                      onChange={(value) =>
                        setCourseData({ ...courseData, schedule: value })
                      }
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
                  {moment(courseData.start).format("HH : mm")}
                </button>
                <MuiPickersUtilsProvider utils={MomentUtils}>
                  <ThemeProvider theme={datepickertheme}>
                    <TimePicker
                      variant="dialog"
                      okLabel="SET"
                      value={courseData.start}
                      open={picker.startpicker}
                      onOpen={() => setPicker({ ...picker, startpicker: true })}
                      onClose={() =>
                        setPicker({ ...picker, startpicker: false })
                      }
                      onChange={(value) =>
                        setCourseData({ ...courseData, start: value })
                      }
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
                  {moment(courseData.end).format("HH : mm")}
                </button>
                <MuiPickersUtilsProvider utils={MomentUtils}>
                  <ThemeProvider theme={datepickertheme}>
                    <TimePicker
                      variant="dialog"
                      okLabel="SET"
                      value={courseData.end}
                      open={picker.endpicker}
                      onOpen={() => setPicker({ ...picker, endpicker: true })}
                      onClose={() => setPicker({ ...picker, endpicker: false })}
                      onChange={(value) =>
                        setCourseData({ ...courseData, end: value })
                      }
                      TextFieldComponent={() => null}
                    />
                  </ThemeProvider>
                </MuiPickersUtilsProvider>
              </div>
            </div>
          </section>
          <section className={classes.bottomsection}>
            <div className={classes.headerarea}>
              <p className={classes.headernewclass}>Description</p>
              <p className={classes.headernewclass}>:</p>
            </div>
            <textarea className={classes.inputarea} rows={5} />
          </section>
          <section className={classes.buttonsection}>
            <button className={classes.submitbtn}>Create</button>
          </section>
        </div>
      </div>
    </main>
  );
}

export default NewClass;
