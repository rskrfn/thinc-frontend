import React from "react";
import classes from "./ScheduleFacilitator.module.css";
import ScheduleContent from "../../schedule_content/facilitator/ScheduleContentFacilitator";
import PlusIcon from "../../../../../assets/icons/icon_plusw.svg";

function ScheduleFacilitator(props) {
  const { data, loading } = props;
  //   console.log({ data });
  return (
    <main className={classes.maincontainer}>
      <ScheduleContent data={data} loading={loading} />
      <button className={classes.button}>
        <img className={classes.buttonicon} src={PlusIcon} alt="" />
        <p className={classes.buttontext}>New Task</p>
      </button>
    </main>
  );
}

export default ScheduleFacilitator;
