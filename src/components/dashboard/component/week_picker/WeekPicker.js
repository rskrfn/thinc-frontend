/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import classes from "./WeekPicker.module.css";
import moment from "moment";

function WeekPicker(props) {
  const { date, setDate } = props;
  const [weekdates, setWeekDates] = useState();

  useEffect(() => {
    const weekstart = moment(date).startOf("week");
    const thisweekdate = [weekstart];
    for (let i = 1; i < 7; i++) {
      // console.log(i);
      thisweekdate.push(moment(weekstart).add(i, "d"));
    }
    setWeekDates(thisweekdate);
  }, [date]);

  // console.log("weekpicker", weekdates);
  return (
    <>
      <main className={classes.maincontainer}>
        <section className={classes.dateselector}>
          {weekdates?.map((item, index) => {
            return (
              <section key={index} className={classes.weekdates}>
                <div
                  className={
                    moment(item).format("YYYY-MM-DD") ===
                    moment(date).format("YYYY-MM-DD")
                      ? classes.itemcontaineractive
                      : classes.itemcontainer
                  }
                  onClick={() => {
                    setDate(moment(item).toDate());
                  }}
                >
                  <p
                    className={
                      moment(item).format("YYYY-MM-DD") ===
                      moment(date).format("YYYY-MM-DD")
                        ? classes.daynameactive
                        : classes.dayname
                    }
                  >
                    {moment(item).format("dd")}
                  </p>
                  <p
                    className={
                      moment(item).format("YYYY-MM-DD") ===
                      moment(date).format("YYYY-MM-DD")
                        ? classes.dateactive
                        : classes.date
                    }
                  >
                    {moment(item).format("DD")}
                  </p>
                </div>
              </section>
            );
          })}
        </section>
      </main>
    </>
  );
}

export default WeekPicker;
