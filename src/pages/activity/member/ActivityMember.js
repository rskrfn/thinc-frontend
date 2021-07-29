import React, { useState, useEffect } from "react";
import classes from "./ActivityMember.module.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyClass from "../../../components/activity/myclass/member/MyClass";
import NewClass from "../../../components/activity/newclass/NewClass";

function ActivityMember(props) {
  const profileData = useSelector((state) => state.loginReducers.data);
  const [myClass, setMyClass] = useState("");
  const [myClassLoading, setMyClassLoading] = useState(false);
  const [newClass, setNewClass] = useState("");
  const [newClassInfo, setNewClassInfo] = useState("");
  const [newClassLoading, setNewClassLoading] = useState(false);
  const [filter, setFilter] = useState({
    search: "",
    sort: "",
    category: "",
    level: "",
    price: "",
    page: "",
  });

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
        console.log("myclass", { err });
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
    setMyClassLoading(true);
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
        console.log("newclass", res.data);
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
        // if (err.message === "Network Error") {
        //   setMyClass(null);
        //   setMyClassLoading(false);
        //   // return console.log("Network Error");
        // } else if (
        //   err.response.data?.message ===
        //   "Particular user doesn't have any courses"
        // ) {
        //   setMyClass(false);
        // } else if (err.response.data?.message === "Data not found") {
        //   setMyClass(false);
        // }
        // setTimeout(() => {
        //   setMyClassLoading(false);
        // }, 1000);
      });
  };

  useEffect(() => {
    getMyClass();
    getNewClass();
  }, []);

  console.log("activity", newClass);
  return (
    <main className={classes.maincontainer}>
      <ToastContainer pauseOnFocusLoss={false} />
      <div className={classes.content}>
        <section className={classes.activity}>
          <p className={classes.pageheader}>Activity</p>
          <MyClass myclass={myClass} loading={myClassLoading} />
          <NewClass
            newclass={newClass}
            loading={newClassLoading}
            newclasinfo={newClassInfo}
            filter={filter}
            setFilter={setFilter}
          />
        </section>
      </div>
    </main>
  );
}

export default ActivityMember;
