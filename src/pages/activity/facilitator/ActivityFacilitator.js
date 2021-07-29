/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";
import classes from "./ActivityFacilitator.module.css";
import MyClass from "../../../components/activity/myclass/facilitator/MyClass";
import CreateCourse from "../../../components/activity/createcourse/CreateCourse";

function ActivityFacilitator(props) {
  const profileData = useSelector((state) => state.loginReducers.data);
  const { setLoading, setLoadingText } = props;
  const [myClass, setMyClass] = useState("");
  const [myclassLoading, setMyClassLoading] = useState(false);
  const [newClass, setNewClass] = useState({
    id: profileData.data?.id,
    coursename: "",
    categories: 0,
    price: 0,
    level: 0,
    schedule: new Date(),
    start: new Date(),
    end: new Date(),
    description: "",
  });
  const [warning, setWarning] = useState({
    coursename: "",
    category: "",
    description: "",
    level: "",
    price: "",
    start: "",
    end: "",
    schedule: "",
  });

  const getMyClass = () => {
    setMyClassLoading(true);
    const config = {
      method: "GET",
      url: `${process.env.REACT_APP_API_URL}/courses/facilitatorclass`,
      headers: { "x-access-token": profileData.token },
      params: { id: profileData.data?.id },
    };
    axios(config)
      .then((res) => {
        console.log("fasclass", res);
        if (res.data?.data.length > 0) {
          setMyClass(res.data.data);
        }
        setTimeout(() => {
          setMyClassLoading(false);
        }, 1000);
      })
      .catch((err) => {
        console.log("fasclass", { err });
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

  const createNewClass = () => {
    setLoadingText("Creating new course...");
    setLoading(true);
    if (
      !newClass.coursename ||
      !newClass.description ||
      !newClass.start ||
      !newClass.end ||
      !newClass.schedule
    ) {
      setLoading(false);
      return toast.warn("Empty field", {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
    if (newClass.categories === 0) {
      setLoading(false);
      return toast.warn("Select course category", {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
    if (newClass.level === 0) {
      setLoading(false);
      return toast.warn("Select course level", {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
    if (
      warning.coursename ||
      warning.description ||
      warning.price ||
      warning.start ||
      warning.end ||
      warning.schedule
    ) {
      setLoading(false);
      return toast.warn(
        warning.coursename ||
          warning.description ||
          warning.price ||
          warning.start ||
          warning.end ||
          warning.schedule,
        {
          position: "top-right",
          autoClose: 5000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );
    }
    const config = {
      method: "POST",
      url: `${process.env.REACT_APP_API_URL}/courses/addcourse`,
      headers: { "x-access-token": profileData.token },
      data: {
        id: profileData.data.id,
        coursename: newClass.coursename,
        category: newClass.categories,
        description: newClass.description,
        level: newClass.level,
        price: newClass.price.toString(),
        start: moment(newClass.start).format("HH:mm:00"),
        end: moment(newClass.end).format("HH:mm:00"),
        schedule: moment(newClass.schedule).format("YYYY-MM-DD"),
      },
    };
    axios(config)
      .then((res) => {
        console.log("newclass", { res });
        setLoading(false);
        setLoadingText("");
      })
      .catch((err) => {
        console.log("newclass err", { err });
        setLoadingText("Error Occured");
        setLoading(false);
      });
  };

  useEffect(() => {
    getMyClass();
  }, []);

  console.log("activityfac", profileData);
  return (
    <main className={classes.maincontainer}>
      <ToastContainer pauseOnFocusLoss={false} />
      <div className={classes.content}>
        <section className={classes.activity}>
          <p className={classes.pageheader}>Activity</p>
          <MyClass myclass={myClass} loading={myclassLoading} />
          <CreateCourse
            newclass={newClass}
            setNewClass={setNewClass}
            createNewClass={createNewClass}
            warning={warning}
            setWarning={setWarning}
          />
        </section>
      </div>
    </main>
  );
}

export default ActivityFacilitator;
