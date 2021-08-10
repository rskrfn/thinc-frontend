/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import classes from "./ActivityMember.module.css";
import axios from "axios";
import { useSelector } from "react-redux";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyClass from "../../../components/activity/myclass/member/MyClass";
import NewClass from "../../../components/activity/newclass/NewClass";
import AllMyClass from "../../../components/activity/myclass/member/all/AllMyClass";

function ActivityMember(props) {
  const profileData = useSelector((state) => state.loginReducers.data);
  const [activitySection, setActivitySection] = useState("main");
  const [myClass, setMyClass] = useState("");
  const [myClassLoading, setMyClassLoading] = useState(false);
  const [newClass, setNewClass] = useState("");
  const [newClassInfo, setNewClassInfo] = useState("");
  const [newClassLoading, setNewClassLoading] = useState(false);
  const [myclassFilter, setMyClassFilter] = useState({
    search: "",
    sort: "",
  });
  const [filter, setFilter] = useState({
    search: "",
    sort: "",
    category: "",
    level: "",
    price: "",
    page: "",
  });

  const renderSection = () => {
    if (activitySection === "main") {
      return (
        <>
          <p className={classes.pageheader}>Activity</p>
          <MyClass
            myclass={myClass}
            loading={myClassLoading}
            setActivitySection={setActivitySection}
          />
          <NewClass
            newclass={newClass}
            loading={newClassLoading}
            newclassinfo={newClassInfo}
            filter={filter}
            setFilter={setFilter}
          />
        </>
      );
    } else if (activitySection === "myclass") {
      return (
        <>
          <AllMyClass
            myclass={myClass}
            loading={myClassLoading}
            filter={myclassFilter}
            setFilter={setMyClassFilter}
            setActivitySection={setActivitySection}
          />
        </>
      );
    }
  };

  const getMyClass = () => {
    setMyClassLoading(true);
    const config = {
      method: "GET",
      url: `${process.env.REACT_APP_API_URL}/courses/myclass`,
      params: {
        id: profileData.data?.id,
        page: 1,
      },
    };
    axios(config)
      .then((res) => {
        // console.log("myclass", res.data.data.result);
        if (res.data?.data.result.length > 0) {
          setMyClass(res.data?.data?.result);
        }
        setTimeout(() => {
          setMyClassLoading(false);
        }, 1000);
      })
      .catch((err) => {
        // console.log("myclass", { err });
        if (err.message === "Network Error") {
          setMyClass(null);
          setMyClassLoading(false);
          // return console.log("Network Error");
        } else if (
          err.response.data?.message ===
          "Particular user doesn't have any courses"
        ) {
          setMyClass(false);
        } else if (err.response.data?.message === "Data not found") {
          setMyClass(false);
        }
        setTimeout(() => {
          setMyClassLoading(false);
        }, 1000);
      });
  };
  const getNewClass = () => {
    setNewClassLoading(true);
    const config = {
      method: "GET",
      url: `${process.env.REACT_APP_API_URL}/courses/all`,
      params: {
        userid: profileData.data?.id,
        search: filter.search,
        sort: filter.sort,
        category: filter.category,
        level: filter.level,
        price: filter.price,
        page: filter.page || 1,
      },
    };
    axios(config)
      .then((res) => {
        // console.log("newclass", res.data);
        if (res.data?.data.result.length > 0) {
          setNewClassInfo(res.data?.data?.info);
          setNewClass(res.data?.data?.result);
        }
        setTimeout(() => {
          setNewClassLoading(false);
        }, 1000);
      })
      .catch((err) => {
        console.log("newclass", { err });
        if (err.message === "Network Error") {
          setNewClass(null);
          // setNewClassLoading(false);
          // return console.log("Network Error");
        } else if (err.response.data?.message === "Data not found") {
          setNewClass(null);
        }
        setTimeout(() => {
          setNewClassLoading(false);
        }, 1000);
      });
  };

  useEffect(() => {
    getMyClass();
  }, []);

  useEffect(() => {
    getNewClass();
  }, [filter]);

  // console.log("activity", newClass);
  return (
    <main className={classes.maincontainer}>
      {/* <ToastContainer pauseOnFocusLoss={false} /> */}
      <div className={classes.content}>
        <section className={classes.activity}>{renderSection()}</section>
      </div>
    </main>
  );
}

export default ActivityMember;
