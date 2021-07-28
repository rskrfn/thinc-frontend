import React from "react";
import classes from "./ScheduleContent.module.css";
import {
  CircularProgressbar as ProgressBar,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import RefreshIcon from "../../../../../assets/refresh.svg";

function ScheduleContent(props) {
  const { data, allschedule, loading } = props;
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
                  <p
                    className={
                      allschedule ? classes.coursenameall : classes.coursename
                    }
                  >
                    {item.course_name.length > 35
                      ? item.course_name.slice(0, 35) + "..."
                      : item.course_name}
                  </p>
                  {!allschedule ? (
                    <div className={classes.progressbarcontainer}>
                      <ProgressBar
                        className={classes.progressbar}
                        value={Number(
                          ((item.progress / item.totalsubcourse) * 100).toFixed(
                            0
                          )
                        )}
                        text={`${Number(
                          ((item.progress / item.totalsubcourse) * 100).toFixed(
                            0
                          )
                        )}%`}
                        styles={buildStyles({
                          pathColor: "#5784BA",
                          textColor: "#5784BA",
                          textSize: "24px",
                          trailColor: "transparent",
                        })}
                        background={false}
                      />
                    </div>
                  ) : null}
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

export default ScheduleContent;
