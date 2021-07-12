import React from "react";
import classes from "./ForYou.module.css";
import ScheduleContent from "../../schedule_content/ScheduleContent";

function ForYou(props) {
  const { data, loading } = props;
  //   console.log({ data });
  return (
    <main className={classes.maincontainer}>
      <ScheduleContent data={data} loading={loading} />
    </main>
  );
}

export default ForYou;
