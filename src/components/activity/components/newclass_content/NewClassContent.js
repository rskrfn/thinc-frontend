import React from "react";
import classes from "./NewClassContent.module.css";
import Loading from "../../../loading/Loading";
import OptionIcon from "../../../../assets/icons/icon_lista.png";

function NewClassContent(props) {
  const { newclass, loading } = props;

  console.log("newclass", newclass);
  return (
    <main className={classes.maincontainer}>
      <div className={classes.content}>
        {loading ? (
          <div className={classes.loadingcontainer}>
            <Loading />
          </div>
        ) : newclass ? (
          newclass.map((item, index) => {
            return (
              <div className={classes.contentcontainer} key={index}>
                <div className={classes.tableclassname}>
                  <p className={classes.tabletext}>{item.Name}</p>
                </div>
                <div className={classes.tablecategory}>
                  <p className={classes.tabletextcenter}>{item.Category}</p>
                </div>
                <div className={classes.tabledescription}>
                  <p className={classes.tabletext}>{item.Description}</p>
                </div>
                <div className={classes.tablelevel}>
                  <p className={classes.tabletext}>{item.Level}</p>
                </div>
                <div className={classes.tableprice}>
                  <p className={classes.tabletextcenter}>
                    {item.Price === 0 ? "Free" : item.Price}
                  </p>
                </div>
                <button className={classes.registerbtn}>Register</button>
                <div className={classes.tableoption}>
                  <img className={classes.optionicon} src={OptionIcon} alt="" />
                </div>
              </div>
            );
          })
        ) : null}
      </div>
    </main>
  );
}

export default NewClassContent;
