import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJenkins } from "@fortawesome/free-brands-svg-icons";
import classes from "./Maintenance.module.css";

function Maintenance() {
  return (
    <div className={classes.maincontainer}>
      <main className={classes.content}>
        <FontAwesomeIcon
          icon={faJenkins}
          size="10x"
          color="rgba(87, 132, 186, 1)"
        />
        <h1 className={classes.header}>
          This website is currently on development
        </h1>
      </main>
    </div>
  );
}

export default Maintenance;
