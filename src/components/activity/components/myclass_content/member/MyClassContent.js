import React, { useState } from "react";
import classes from "./MyClassContent.module.css";
import {
  CircularProgressbar as ProgressBar,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Loading from "../../../../loading/Loading";
import { scoreColor } from "../../../../../services/scorecolor/scoreColor";
import OptionIcon from "../../../../../assets/icons/icon_lista.png";

function MyClassContent(props) {
  const { myclass, loading, sliced } = props;
  const [checked, setChecked] = useState(false);
  // console.log(myclass);
  return (
    <main className={classes.maincontainer}>
      {loading ? (
        <div className={classes.loadingcontainer}>
          <Loading />
        </div>
      ) : myclass ? (
        sliced ? (
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
                  <p className={classes.tabletext}>{item.Name}</p>
                </div>
                <div className={classes.tablecategory}>
                  <p className={classes.tabletext}>{item.Category}</p>
                </div>
                <div className={classes.tabledesc}>
                  <p className={classes.tabletext}>{item.Description}</p>
                </div>
                <div className={classes.tableprogress}>
                  <ProgressBar
                    className={classes.progressbar}
                    value={Number(
                      ((item.progress / item.totalsubcourse) * 100).toFixed(0)
                    )}
                    text={`${Number(
                      ((item.progress / item.totalsubcourse) * 100).toFixed(0)
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
                <div className={classes.tablestatus}>
                  <p className={classes.status}>
                    {Number(item.progress / item.totalsubcourse) !== 1
                      ? "Ongoing"
                      : "Completed"}
                  </p>
                </div>
                <div className={classes.tablescore}>
                  {item.score ? (
                    <p
                      className={classes.score}
                      style={{ color: scoreColor(item.score) }}
                    >
                      {item.score.slice(0, 2)}
                    </p>
                  ) : (
                    <p className={classes.unfinished}>unfinished</p>
                  )}
                </div>
                <div className={classes.tableoption}>
                  <img className={classes.optionicon} src={OptionIcon} alt="" />
                </div>
              </div>
            );
          })
        ) : (
          myclass.map((item, index) => {
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
                  <p className={classes.tabletext}>{item.Name}</p>
                </div>
                <div className={classes.tablecategory}>
                  <p className={classes.tabletext}>{item.Category}</p>
                </div>
                <div className={classes.tabledesc}>
                  <p className={classes.tabletext}>{item.Description}</p>
                </div>
                <div className={classes.tableprogress}>
                  <ProgressBar
                    className={classes.progressbar}
                    value={Number(
                      ((item.progress / item.totalsubcourse) * 100).toFixed(0)
                    )}
                    text={`${Number(
                      ((item.progress / item.totalsubcourse) * 100).toFixed(0)
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
                <div className={classes.tablestatus}>
                  <p className={classes.status}>
                    {Number(item.progress / item.totalsubcourse) !== 1
                      ? "Ongoing"
                      : "Completed"}
                  </p>
                </div>
                <div className={classes.tablescore}>
                  {item.score ? (
                    <p
                      className={classes.score}
                      style={{ color: scoreColor(item.score) }}
                    >
                      {item.score.slice(0, 2)}
                    </p>
                  ) : (
                    <p className={classes.unfinished}>unfinished</p>
                  )}
                </div>
                <div className={classes.tableoption}>
                  <img className={classes.optionicon} src={OptionIcon} alt="" />
                </div>
              </div>
            );
          })
        )
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
