/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import classes from "./DashboardMember.module.css";
import axios from "axios";
import moment from "moment";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core/styles";
import MomentUtils from "@date-io/moment";
import CalendarIcon from "../../../assets/icons/icon_calendar.png";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

import News from "../../../components/dashboard/component/news/News";
import WeekPicker from "../../../components/dashboard/component/week_picker/WeekPicker";
import AllSchedule from "../../../components/dashboard/component/schedule/all_schedule/AllSchedule";
import ForYou from "../../../components/dashboard/component/schedule/for_you/ForYou";

function DashboardMember() {
  const [newsData, setNewsData] = useState();
  const [datePicker, setDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [activeTab, setActiveTab] = useState(1);
  const [allSchedule, setAllSchedule] = useState("");
  const [allLoading, setAllLoading] = useState(false);
  const [forYou, setForYou] = useState("");
  const [foryouLoading, setForYouLoading] = useState(false);
  const profileData = useSelector((state) => state.loginReducers.data?.data);

  const datepickertheme = createTheme({
    overrides: {
      MuiPickersToolbar: {
        toolbar: {
          backgroundColor: "rgba(87, 132, 186, 1)",
        },
      },
      MuiPickersDay: {
        day: {
          color: "rgba(120, 120, 120, 1)",
        },
        daySelected: {
          backgroundColor: "rgba(87, 132, 186, 1)",
        },
        dayDisabled: {
          color: "rgba(120, 120, 120, 1)",
        },
        current: {
          color: "rgba(87, 132, 186, 1)",
        },
      },
      MuiButton: {
        textPrimary: {
          color: "rgba(87, 132, 186, 1)",
        },
      },
    },
  });

  const getNews = () => {
    let config = {
      method: "GET",
      url: `${process.env.REACT_APP_NEWS_API}`,
      params: {
        q: "technology",
        apiKey: process.env.REACT_APP_NEWS_API_KEY,
      },
    };
    axios(config)
      .then((res) => {
        // console.log("news", { res });
        setNewsData(res.data?.articles);
      })
      .catch((err) => {
        // console.log('news', {err});
      });
  };

  const getAllSchedule = () => {
    setAllLoading(true);
    let config = {
      method: "GET",
      url: `${process.env.REACT_APP_API_URL}/courses/allschedule`,
      params: {
        schedule: moment(date).format("YYYY-MM-DD"),
      },
    };
    axios(config)
      .then((res) => {
        // console.log("allschedule", res);
        if (res.data?.data.length > 0) {
          setAllSchedule(res.data.data);
          setTimeout(() => {
            setAllLoading(false);
          }, 1000);
        }
      })
      .catch((err) => {
        console.log({ err });
        if (err.message === "Network Error") {
          setAllSchedule(false);
          setAllLoading(false);
          return;
        } else if (err.response?.data?.message === "Data not found") {
          setAllSchedule(false);
          setTimeout(() => {
            setAllLoading(false);
          }, 1000);
        }
      });
  };

  const getForYou = () => {
    setForYouLoading(true);
    let config = {
      method: "GET",
      url: `${process.env.REACT_APP_API_URL}/courses/foryou`,
      params: {
        userid: profileData?.id,
        schedule: moment(date).format("YYYY-MM-DD"),
      },
    };
    axios(config)
      .then((res) => {
        // console.log("foryou", res);
        if (res.data?.data.length > 0) {
          setForYou(res.data.data);
          setTimeout(() => {
            setForYouLoading(false);
          }, 1000);
        }
      })
      .catch((err) => {
        if (err.message === "Network Error") {
          setForYou(false);
          setForYouLoading(false);
          return toast.error("Server is offline", {
            position: "top-center",
            autoClose: 5000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        } else if (err.response?.data?.message === "Data not found") {
          setForYou(false);
          setTimeout(() => {
            setForYouLoading(false);
          }, 1000);
        }
      });
  };

  useEffect(() => {
    getNews();
  }, []);

  useEffect(() => {
    getAllSchedule();
    getForYou();
  }, [date]);

  // console.log("newsdata", profileData);
  return (
    <main className={classes.maincontainer}>
      <ToastContainer pauseOnFocusLoss={false} />
      <div className={classes.content}>
        <section className={classes.newssection}>
          <p className={classes.newsheader}>News</p>
          <div className={classes.newscontent}>
            <News newsData={newsData} />
          </div>
        </section>
        <section className={classes.schedulesection}>
          <div className={classes.scheduleheadercontainer}>
            <p className={classes.scheduleheader}>
              {moment(date).calendar(new Date(), {
                sameDay: "[Today]",
                nextDay: "[Tommorrow]",
                nextWeek: "[Next] ddd",
                lastDay: "[Yesterday]",
                lastWeek: "[Last] ddd",
                sameElse: "ddd",
              }) +
                ", " +
                moment(date).format("MMMM DD")}
            </p>
            <img
              className={classes.datepickerbtn}
              src={CalendarIcon}
              alt=""
              onClick={() => {
                setDatePicker(true);
              }}
            />
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <ThemeProvider theme={datepickertheme}>
                <DatePicker
                  value={date}
                  open={datePicker}
                  onOpen={() => setDatePicker(true)}
                  onClose={() => setDatePicker(false)}
                  onChange={(value) => setDate(value)}
                  TextFieldComponent={() => null}
                />
              </ThemeProvider>
            </MuiPickersUtilsProvider>
          </div>
          <WeekPicker date={date} setDate={setDate} />
          <div className={classes.scheduletabcontainer}>
            <p
              className={
                activeTab === 0
                  ? classes.scheduletabactive
                  : classes.scheduletab
              }
              onClick={() => {
                setActiveTab(0);
              }}
            >
              All Schedule
            </p>
            <p
              className={
                activeTab === 1
                  ? classes.scheduletabactive
                  : classes.scheduletab
              }
              onClick={() => {
                setActiveTab(1);
              }}
            >
              For You
            </p>
          </div>
          {activeTab === 1 ? (
            <ForYou data={forYou} loading={foryouLoading} />
          ) : (
            <AllSchedule data={allSchedule} loading={allLoading} />
          )}
        </section>
      </div>
    </main>
  );
}

export default DashboardMember;
