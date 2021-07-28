/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import classes from "./ActivityFacilitator.module.css";
import MyClass from "../../../components/activity/myclass/MyClass";
import { useSelector } from "react-redux";
import axios from "axios";
import NewClass from "../../../components/activity/newclass/NewClass";

function ActivityFacilitator(props) {
  const profileData = useSelector((state) => state.loginReducers.data);
  const { setLoading, setLoadingText } = props;
  const [myClass, setMyClass] = useState("");
  const [myclassLoading, setMyClassLoading] = useState(false);
  const [newClass, setNewClass] = useState({
    id: profileData.data?.id,
    coursename: "",
    category: "",
    description: "",
    level: "",
    price: "",
    start: "",
    end: "",
    schedule: "",
  });
  const [newclassWarning, setNewClassWarning] = useState({
    coursenamewarning: "",
    categorywarning: "",
    descriptionwarning: "",
    levelwarning: "",
    pricewarning: "",
    startwarning: "",
    endwarning: "",
    schedulewarning: "",
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
    const config = {
      method: "POST",
      url: `${process.env.REACT_APP_API_URL}/courses/addcourse`,
      header: { "x-access-token": profileData.token },
      data: newClass,
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
      });
  };

  useEffect(() => {
    getMyClass();
  }, []);

  console.log("myclass", myClass);
  return (
    <main className={classes.maincontainer}>
      <div className={classes.content}>
        <section className={classes.activity}>
          <p className={classes.pageheader}>Activity</p>
          <MyClass myclass={myClass} loading={myclassLoading} />
          <NewClass
            newcalss={newClass}
            createNewClass={createNewClass}
            setNewClass={setNewClass}
          />
        </section>
      </div>
    </main>
  );
}

export default ActivityFacilitator;
