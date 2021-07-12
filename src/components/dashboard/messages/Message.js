import React from "react";
import classes from "./Message.module.css";

import PlusIcon from "../../../assets/icons/icon_plus.png";
import SearchIcon from "../../../assets/icons/icon_search.png";
import MessageData from "../../../assets/data/Messages";

function Message() {
  return (
    <aside className={classes.maincontainer}>
      <div className={classes.content}>
        <section className={classes.headersection}>
          <p className={classes.header}>Messages</p>
          <img className={classes.addicon} src={PlusIcon} alt="" />
        </section>
        <section className={classes.searchsection}>
          <img className={classes.searchicon} src={SearchIcon} alt="" />
          <input className={classes.searchbar} placeholder="Search" />
        </section>
        <section className={classes.messagelist}>
          {MessageData.map((item, index) => {
            return (
              <div className={classes.messagecontainer} key={index}>
                <div className={classes.leftcontent}>
                  <div className={classes.imagecontainer}>
                    <img className={classes.image} src={item.dp} alt="" />
                  </div>
                  <div className={classes.middlecontent}>
                    <p className={classes.messagename}>{item.name}</p>
                    <p className={classes.messagecontent}>
                      {item.content.length > 36
                        ? item.content.slice(0, 36) + "..."
                        : item.content}
                    </p>
                  </div>
                </div>
                <div className={classes.rightcontent}>
                  <p className={classes.timestamp}>{item.time}</p>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </aside>
  );
}

export default Message;
