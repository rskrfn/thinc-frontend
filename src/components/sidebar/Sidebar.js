/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import classes from "./Sidebar.module.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Modal from "./modal/Modal";
import {
  dashboardAction,
  activityAction,
  helpAction,
  profileAction,
} from "../../redux/ActionCreators/Page";

// Icons
import NotifIcon from "../../assets/icons/icon_notif.png";
import NotifIconActive from "../../assets/icons/icon_notifactive.png";
import DefaultProfilePicture from "../../assets/images/img_profilepicture.png";
import DashboardIcon from "../../assets/icons/icon_dashboardw.png";
import DashboardActive from "../../assets/icons/icon_dashboard.png";
import ActivityIcon from "../../assets/icons/icon_activityw.png";
import ActivityActive from "../../assets/icons/icon_activity.png";
import HelpIcon from "../../assets/icons/icon_help.png";
import HelpIconActive from "../../assets/icons/icon_helpactive.png";
import LogoutIcon from "../../assets/icons/icon_logout.png";

function Sidebar(props) {
  const { section, setSection } = props;
  const dispatch = useDispatch();
  const profileData = useSelector((state) => state.loginReducers.data);
  const page = useSelector((state) => state.pageReducers);
  const [profile, setProfile] = useState("");
  const [modal, setModal] = useState(false);

  const getProfile = () => {
    let config = {
      method: "GET",
      url: `${process.env.REACT_APP_API_URL}/profile`,
      headers: {
        token: profileData.token,
      },
      params: { id: profileData.data.id },
    };
    axios(config)
      .then((res) => {
        // console.log(res);
        setProfile(res.data?.data[0]);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProfile();
  }, []);

  // console.log("props", props);
  return (
    <>
      {modal ? <Modal setModal={setModal} /> : null}
      <aside className={classes.sidebar}>
        <div className={classes.content}>
          <section
            // to="/profile"
            className={
              page.profile
                ? classes.profilesectionactive
                : classes.profilesection
            }
            onClick={() => {
              // setSection(0);
              dispatch(profileAction());
            }}
          >
            <div className={classes.notificoncontainer}>
              <span>
                <img
                  className={classes.notificon}
                  src={page.profile ? NotifIconActive : NotifIcon}
                  alt=""
                />
              </span>
            </div>
            <div className={classes.profilepicturecontainer}>
              <span>
                <img
                  className={classes.profilepicture}
                  src={
                    profile.display_picture
                      ? `${process.env.REACT_APP_API_URL}${profile.display_picture}`
                      : DefaultProfilePicture
                  }
                  alt=""
                />
              </span>
            </div>
            <p className={page.profile ? classes.nameactive : classes.name}>
              {profileData.data.name ? profileData.data.name : "User name"}
            </p>
            <p className={page.profile ? classes.statusactive : classes.status}>
              online
            </p>
          </section>
          <section
            // to="/dashboard"
            className={
              page.dashboard
                ? classes.dashboardsectionactive
                : classes.dashboardsection
            }
            onClick={() => {
              // setSection(1);
              dispatch(dashboardAction());
            }}
          >
            <img
              className={classes.sidebaricons}
              src={page.dashboard ? DashboardActive : DashboardIcon}
              alt=""
            />
            <p
              className={
                page.dashboard ? classes.sidebarmenuactive : classes.sidebarmenu
              }
            >
              Dashboard
            </p>
          </section>
          <section
            // to="/activity"
            className={
              page.activity
                ? classes.activitysectionactive
                : page.help || page.profile
                ? classes.activitysectionbelow
                : classes.activitysection
            }
            onClick={() => {
              // setSection(2);
              dispatch(activityAction());
            }}
          >
            <img
              className={classes.sidebaricons}
              src={page.activity ? ActivityActive : ActivityIcon}
              alt=""
            />
            <p
              className={
                page.activity ? classes.sidebarmenuactive : classes.sidebarmenu
              }
            >
              Activity
            </p>
          </section>
          <section
            // to="/help"
            className={
              page.help
                ? classes.sectionactive
                : page.profile
                ? classes.sectionprofile
                : classes.section
            }
            onClick={() => {
              // setSection(3);
              dispatch(helpAction());
            }}
          >
            <img
              className={classes.sidebaricons}
              src={page.help ? HelpIconActive : HelpIcon}
              alt=""
            />
            <p
              className={
                page.help ? classes.sidebarmenuactive : classes.sidebarmenu
              }
            >
              Help
            </p>
          </section>
          <section
            className={
              page.profile
                ? classes.logoutsectionprofile
                : classes.logoutsection
            }
          >
            <img className={classes.sidebaricons} src={LogoutIcon} alt="" />
            <p
              onClick={() => {
                setModal(true);
              }}
              className={classes.logout}
            >
              Logout
            </p>
          </section>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
