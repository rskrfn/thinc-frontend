import React from "react";
import classes from "./AllSchedule.module.css";
import ScheduleContent from "../../schedule_content/member/ScheduleContent";

function AllSchedule(props) {
  const { data, loading } = props;

  console.log(data);
  return (
    <main className={classes.maincontainer}>
      <ScheduleContent data={data} allschedule={true} loading={loading} />
    </main>
  );
}

export default AllSchedule;
