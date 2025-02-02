import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import OptionIcon from "../../../../assets/icons/icon_lista.png";
import Loading from "../../../loading/Loading";
import classes from "./NewClassContent.module.css";

function NewClassContent(props) {
  const { newclass, loading } = props;
  const auth = useSelector((state) => state.loginReducers.data);

  // console.log("newclass", newclass);
  const registerHandler = async (item) => {
    await axios({
      method: "POST",
      url: `${process.env.REACT_APP_API_URL}/courses/register`,
      headers: {
        "x-access-token": `${auth.token}`,
      },
      data: {
        userid: auth.data.id,
        courseid: item.id,
      },
    })
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => {
        console.log("NewClassContent", err);
      });
  };
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
                <button
                  onClick={() => {
                    registerHandler(item);
                  }}
                  className={classes.registerbtn}
                >
                  Register
                </button>
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
