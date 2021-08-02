import React, { useState, useEffect } from "react";
import classes from "./Profile.module.css";

import DefaultAvatar from "../../assets/images/img_profilepicture.png";
import editIcon from "../../assets/icons/icon_edits.png";
import arrowIcon from "../../assets/icons/icon_arrow.png";
import profileIcon from "../../assets/icons/icon_profileb.png";
import passIcon from "../../assets/icons/icon_stars.png";
import chatIcon from "../../assets/icons/icon_chatb.png";
import notifIcon from "../../assets/icons/icon_pushnotif.png";
import securityIcon from "../../assets/icons/icon_lock.png";
import dataIcon from "../../assets/icons/icon_data.png";
import axios from "axios";
import { useSelector } from "react-redux";

function Profile() {
  const profileData = useSelector((state) => state.loginReducers.data);
  const [profile, setProfile] = useState("");

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

  return (
    <main className={classes.maincontainer}>
      <div className={classes.content}>
        <section className={classes.profile}>
          <div className={classes.bannersection}>
            <div className={classes.avatarcontainer}>
              <img
                className={classes.avatar}
                src={
                  profile.display_picture
                    ? `${process.env.REACT_APP_API_URL}${profile.display_picture}`
                    : DefaultAvatar
                }
                alt=""
              />
              <img className={classes.editicon} src={editIcon} alt="" />
            </div>
            <p className={classes.name}>
              {profileData.data.name || "User Full Name"}
            </p>
          </div>
          <div className={classes.optionsection}>
            <p className={classes.pageheader}>Profile Settings</p>
            <div className={classes.menucontainer}>
              <div className={classes.leftside}>
                <img className={classes.menuicon} src={profileIcon} alt="" />
                <p className={classes.menutext}>Personal Information</p>
              </div>
              <img className={classes.arrowicon} src={arrowIcon} alt="" />
            </div>
            <div className={classes.menucontainer}>
              <div className={classes.leftside}>
                <img className={classes.menuicon} src={passIcon} alt="" />
                <p className={classes.menutext}>Change Password</p>
              </div>
              <img className={classes.arrowicon} src={arrowIcon} alt="" />
            </div>
            <div className={classes.menucontainer}>
              <div className={classes.leftside}>
                <img className={classes.menuicon} src={chatIcon} alt="" />
                <p className={classes.menutext}>Chat Settings</p>
              </div>
              <img className={classes.arrowicon} src={arrowIcon} alt="" />
            </div>
            <div className={classes.menucontainer}>
              <div className={classes.leftside}>
                <img className={classes.menuicon} src={notifIcon} alt="" />
                <p className={classes.menutext}>Push Notifications</p>
              </div>
              <img className={classes.arrowicon} src={arrowIcon} alt="" />
            </div>
            <div className={classes.menucontainer}>
              <div className={classes.leftside}>
                <img className={classes.menuicon} src={securityIcon} alt="" />
                <p className={classes.menutext}>Privacy and Security</p>
              </div>
              <img className={classes.arrowicon} src={arrowIcon} alt="" />
            </div>
            <div className={classes.menucontainerbottom}>
              <div className={classes.leftside}>
                <img className={classes.menuicon} src={dataIcon} alt="" />
                <p className={classes.menutext}>Data and Storage</p>
              </div>
              <img className={classes.arrowicon} src={arrowIcon} alt="" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Profile;
