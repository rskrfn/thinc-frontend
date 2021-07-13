/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import classes from "./DashboardFacilitator.module.css";
import axios from "axios";
import moment from "moment";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core/styles";
import MomentUtils from "@date-io/moment";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

import CalendarIcon from "../../../assets/icons/icon_calendar.png";

import News from "../../../components/dashboard/component/news/News";
import WeekPicker from "../../../components/dashboard/component/week_picker/WeekPicker";
import ScheduleFacilitator from "../../../components/dashboard/component/schedule/facilitator/ScheduleFacilitator";

function DashboardFacilitator() {
  const [newsData, setNewsData] = useState();
  const [datePicker, setDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [activeTab, setActiveTab] = useState(1);
  const [schedule, setSchedule] = useState("");
  const [scheduleLoading, setScheduleLoading] = useState(false);
  const profileData = useSelector((state) => state.loginReducers.data?.data);
  const token = useSelector((state) => state.loginReducers.data?.token);

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

  const getSchedule = () => {
    setScheduleLoading(true);
    let config = {
      method: "GET",
      url: `${process.env.REACT_APP_API_URL}/courses/facilitatorschedule`,
      headers: {
        "x-access-token": token,
      },
      params: {
        id: profileData?.id,
        schedule: moment(date).format("YYYY-MM-DD"),
      },
    };
    axios(config)
      .then((res) => {
        // console.log("foryou", res);
        if (res.data?.data.length > 0) {
          setSchedule(res.data.data);
          setTimeout(() => {
            setScheduleLoading(false);
          }, 1000);
        }
      })
      .catch((err) => {
        if (err.message === "Network Error") {
          setSchedule(false);
          setScheduleLoading(false);
          return toast.error("Server is offline", {
            position: "top-center",
            autoClose: 5000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        } else if (err.response?.data?.message === "No schedule found") {
          setSchedule(false);
          setTimeout(() => {
            setScheduleLoading(false);
          }, 1000);
        }
      });
  };

  useEffect(() => {
    getNews();
  }, []);

  useEffect(() => {
    getSchedule();
  }, [date]);

  console.log("profiledata", profileData);
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
          <ScheduleFacilitator data={schedule} loading={scheduleLoading} />
        </section>
      </div>
    </main>
  );
}

export default DashboardFacilitator;
