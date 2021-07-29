import React from "react";
import classes from "./NewClassContent.module.css";

function NewClassContent() {
  return (
    <main className={classes.maincontainer}>
      <div className={classes.content}>
        <p>New class content</p>
      </div>
    </main>
  );
}

export default NewClassContent;
