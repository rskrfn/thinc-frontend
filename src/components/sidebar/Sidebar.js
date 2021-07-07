import React, { useState, useEffect } from "react";
import classes from "./Sidebar.module.css";
import { useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import Modal from "./modal/Modal";

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
  const profileData = useSelector((state) => state.loginReducers.data);
  const [profile, setProfile] = useState("");
  const [modal, setModal] = useState(false);

  const logoutHandler = () => {};

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

  //   useEffect(() => {}, []);

  console.log("props", props);
  return (
    <>
      {modal ? <Modal setModal={setModal} /> : null}
      <aside className={classes.sidebar}>
        <div className={classes.content}>
          <Link
            to="/profile"
            className={
              section === 0
                ? classes.profilesectionactive
                : classes.profilesection
            }
            onClick={() => {
              setSection(0);
            }}
          >
            <div className={classes.notificoncontainer}>
              <span>
                <img
                  className={classes.notificon}
                  src={section === 0 ? NotifIconActive : NotifIcon}
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
            <p className={section === 0 ? classes.nameactive : classes.name}>
              {profileData.data.name ? profileData.data.name : "User name"}
            </p>
            <p
              className={section === 0 ? classes.statusactive : classes.status}
            >
              online
            </p>
          </Link>
          <Link
            to="/dashboard"
            className={
              section === 1
                ? classes.dashboardsectionactive
                : classes.dashboardsection
            }
            onClick={() => {
              setSection(1);
            }}
          >
            <img
              className={classes.sidebaricons}
              src={section === 1 ? DashboardActive : DashboardIcon}
              alt=""
            />
            <p
              className={
                section === 1 ? classes.sidebarmenuactive : classes.sidebarmenu
              }
            >
              Dashboard
            </p>
          </Link>
          <Link
            to="/activity"
            className={
              section === 2
                ? classes.activitysectionactive
                : section === 3 || section === 0
                ? classes.activitysectionbelow
                : classes.activitysection
            }
            onClick={() => {
              setSection(2);
            }}
          >
            <img
              className={classes.sidebaricons}
              src={section === 2 ? ActivityActive : ActivityIcon}
              alt=""
            />
            <p
              className={
                section === 2 ? classes.sidebarmenuactive : classes.sidebarmenu
              }
            >
              Activity
            </p>
          </Link>
          <Link
            to="/help"
            className={
              section === 3
                ? classes.sectionactive
                : section === 0
                ? classes.sectionprofile
                : classes.section
            }
            onClick={() => {
              setSection(3);
            }}
          >
            <img
              className={classes.sidebaricons}
              src={section === 3 ? HelpIconActive : HelpIcon}
              alt=""
            />
            <p
              className={
                section === 3 ? classes.sidebarmenuactive : classes.sidebarmenu
              }
            >
              Help
            </p>
          </Link>
          <section
            className={
              section === 0
                ? classes.logoutsectionprofile
                : classes.logoutsection
            }
            onClick={() => {
              setModal(true);
            }}
          >
            <img className={classes.sidebaricons} src={LogoutIcon} alt="" />
            <p className={classes.logout}>Logout</p>
          </section>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
