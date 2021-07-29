import React, { useState } from "react";
import classes from "./MyClassContent.module.css";
import OptionIcon from "../../../../../assets/icons/icon_lista.png";
import moment from "moment";
import StudentIcon from "../../../../../assets/icons/icon_student.svg";
import Loading from "../../../../loading/Loading";

function MyClassContent(props) {
  const { myclass, loading } = props;
  const [checked, setChecked] = useState(false);
  console.log(loading);
  return (
    <main className={classes.maincontainer}>
      {loading ? (
        <div className={classes.loadingcontainer}>
          <Loading />
        </div>
      ) : myclass ? (
        myclass.slice(0, 3).map((item, index) => {
          return (
            <div className={classes.contentcontainer} key={index}>
              <div className={classes.tablecheckbox}>
                <input
                  className={classes.checkbox}
                  type="checkbox"
                  checked={checked}
                  onChange={() => {
                    setChecked(!checked);
                  }}
                />
              </div>
              <div className={classes.tableclassname}>
                <p className={classes.tabletext}>{item.course_name}</p>
              </div>
              <div className={classes.tablecategory}>
                <p className={classes.tabletext}>{item.category}</p>
              </div>
              <div className={classes.tabledesc}>
                <p className={classes.tabletext}>{item.Description}</p>
              </div>
              <div className={classes.tableschedule}>
                <p className={classes.tabletext}>{`${moment(
                  item.schedule
                ).format("ddd")}, ${item.start_time.slice(
                  0,
                  5
                )} - ${item.end_time.slice(0, 5)}`}</p>
              </div>
              <div className={classes.tablestudents}>
                <p className={classes.tabletext}>{item.students}</p>
                <img className={classes.studenticon} src={StudentIcon} alt="" />
              </div>
              <div className={classes.tableoption}>
                <img className={classes.optionicon} src={OptionIcon} alt="" />
              </div>
            </div>
          );
        })
      ) : (
        <div className={classes.emptycourse}>
          <p className={classes.emptytext}>
            Seems like you don't have any course yet
          </p>
        </div>
      )}
    </main>
  );
}

export default MyClassContent;
