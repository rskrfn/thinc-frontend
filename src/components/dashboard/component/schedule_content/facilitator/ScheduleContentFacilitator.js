import React from "react";
import classes from "./ScheduleContentFacilitator.module.css";
import {
  CircularProgressbar as ProgressBar,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import RefreshIcon from "../../../../../assets/refresh.svg";
import StudentIcon from "../../../../../assets/icons/icon_student.svg";

function ScheduleContentFacilitator(props) {
  const { data, loading } = props;
  console.log({ data });
  return (
    <main className={classes.maincontainer}>
      {!loading ? (
        data ? (
          data.map((item, index) => {
            return (
              <div key={index} className={classes.schedulecontainer}>
                <p className={classes.coursetime}>
                  {item.start_time.slice(0, 5) +
                    " - " +
                    item.end_time.slice(0, 5)}
                </p>
                <div className={classes.rightside}>
                  <p className={classes.coursename}>
                    {item.course_name.length > 35
                      ? item.course_name.slice(0, 35) + "..."
                      : item.course_name}
                  </p>
                  <div className={classes.studentcontainer}>
                    <p className={classes.studenttext}>{item.students}</p>
                    <img
                      className={classes.studenticon}
                      src={StudentIcon}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className={classes.emptyschedule}>
            <p className={classes.emptytext}>
              Seems like you don't have any schedule for today
            </p>
          </div>
        )
      ) : (
        <div className={classes.loading}>
          <img className={classes.refreshicon} src={RefreshIcon} alt="" />
          <p className={classes.loadingtext}>Loading</p>
        </div>
      )}
    </main>
  );
}

export default ScheduleContentFacilitator;
