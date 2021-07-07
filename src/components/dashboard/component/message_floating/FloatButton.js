import React from "react";
import classes from "./FloatButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import PlusIcon from "../../../../assets/icons/icon_plus.png";

function FloatButton() {
  return (
    <Link to="/message" className={classes.btn}>
      <FontAwesomeIcon icon={faComment} size="2x" color="white" />
    </Link>
  );
}

export default FloatButton;
