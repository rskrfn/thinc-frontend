import React, { useState, useEffect } from "react";
import classes from "./ActivityMember.module.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyClass from "../../../components/activity/myclass/MyClass";

function ActivityMember(props) {
  const profileData = useSelector((state) => state.loginReducers.data);
  const [myClass, setMyClass] = useState("");
  const [myClassLoading, setMyClassLoading] = useState(false);
  const [newClass, setNewClass] = useState("");
  const [newClassLoading, setNewClassLoading] = useState(false);
  return (
    <main className={classes.maincontainer}>
      <ToastContainer pauseOnFocusLoss={false} />
      <div className={classes.content}>
        <section className={classes.activity}>
          <p className={classes.pageheader}>Activity</p>
          <MyClass myClass={myClass} loading={myClassLoading} />
        </section>
      </div>
    </main>
  );
}

export default ActivityMember;
