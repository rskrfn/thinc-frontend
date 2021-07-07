import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./ResetPassword.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import SendEmail from "../../../components/auth/reset_password/section_one/SendEmail";
import Verification from "../../../components/auth/reset_password/section_two/Verification";
import NewPassword from "../../../components/auth/reset_password/section_three/NewPassword";

function ResetPassword(props) {
  const [section, setSection] = useState(1);
  const [iconSection, setIconSection] = useState(1);
  const [resetData, setResetData] = useState({
    email: "",
    otp: "",
    newpassword: "",
  });

  const sectionSelector = () => {
    switch (section) {
      case 1:
        return (
          <>
            <SendEmail
              setSection={setSection}
              setIconSection={setIconSection}
              resetData={resetData}
              setResetData={setResetData}
            />
          </>
        );
      case 2:
        return (
          <>
            <Verification
              setSection={setSection}
              setIconSection={setIconSection}
              resetData={resetData}
              setResetData={setResetData}
            />
          </>
        );
      case 3:
        return (
          <>
            <NewPassword
              setSection={setSection}
              setIconSection={setIconSection}
              resetData={resetData}
              setResetData={setResetData}
            />
          </>
        );
      default:
        return (
          <>
            <SendEmail />
          </>
        );
    }
  };
  return (
    <>
      <main className={classes.maincontainer}>
        <div className={classes.content}>
          {section === 1 ? (
            <Link to="/" className={classes.backicon} onClick={() => {}}>
              <FontAwesomeIcon
                icon={faChevronLeft}
                size="2x"
                color="rgba(1, 6, 32, 1)"
              />
            </Link>
          ) : null}
          <section className={classes.leftcontent}>
            <img
              className={classes.iconsection}
              src={`/assets/icon_reset${iconSection}.png`}
              alt=""
            />
          </section>
          <section className={classes.rightsection}>
            <div className={classes.rightcontent}>{sectionSelector()}</div>
          </section>
        </div>
      </main>
    </>
  );
}

export default ResetPassword;
