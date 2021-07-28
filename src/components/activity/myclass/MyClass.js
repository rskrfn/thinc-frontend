import React, { useState } from "react";
import MyClassContent from "../components/myclass_content/MyClassContent";
import classes from "./MyClass.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function MyClass(props) {
  const { myclass, loading } = props;
  const [checked, setChecked] = useState(false);

  console.log(checked);
  return (
    <main className={classes.maincontainer}>
      <div className={classes.content}>
        <p className={classes.header}>My Class</p>
        <section className={classes.tableheader}>
          <div className={classes.headercheckbox}>
            <input
              className={classes.checkbox}
              type="checkbox"
              checked={checked}
              onChange={() => {
                setChecked(!checked);
              }}
            />
          </div>
          <div className={classes.headerclassname}>
            <p className={classes.headertext}>Class Name</p>
          </div>
          <div className={classes.headercategory}>
            <p className={classes.headertext}>Category</p>
          </div>
          <div className={classes.headerdesc}>
            <p className={classes.headertext}>Description</p>
          </div>
          <div className={classes.headerschedule}>
            <p className={classes.headertext}>Schedule</p>
          </div>
          <div className={classes.headerstudents}>
            <p className={classes.headertext}>Students</p>
          </div>
        </section>
        <section className={classes.tablecontent}>
          <MyClassContent myclass={myclass} loading={loading} />
        </section>
        <section className={classes.viewall}>
          <div className={classes.viewallcontainer}>
            <p className={classes.viewalltext}>view all</p>
            <FontAwesomeIcon
              icon={faChevronRight}
              size="1x"
              color="rgba(0, 0, 0, 0.8)"
            />
          </div>
        </section>
      </div>
    </main>
  );
}

export default MyClass;
