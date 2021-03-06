import React, { useState } from "react";
import MyClassContent from "../../components/myclass_content/member/MyClassContent";
import classes from "./MyClass.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function MyClass(props) {
  const { myclass, loading, setActivitySection } = props;
  const [checked, setChecked] = useState(false);

  // console.log(checked);
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
          <div className={classes.headerprogress}>
            <p className={classes.headertext}>Progress</p>
          </div>
          <div className={classes.headerstatus}>
            <p className={classes.headertext}>Status</p>
          </div>
          <div className={classes.headerscore}>
            <p className={classes.headertext}>Score</p>
          </div>
        </section>
        <section className={classes.tablecontent}>
          <MyClassContent myclass={myclass} loading={loading} sliced={true} />
        </section>
        <section className={classes.viewall}>
          <div
            className={classes.viewallcontainer}
            onClick={() => {
              setActivitySection("myclass");
            }}
          >
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
