import React from "react";
import { Link } from "react-router-dom";
import personUrl from "../../assets/icons/person.svg";
import Navigate from "../Navigate";
import styles from "./account.module.scss";

const Account: React.FC = () => {
  const [openedNavigate, setOpenedNavigate] = React.useState(false);

  const openNav = () => {
    setOpenedNavigate(!openedNavigate);
  };

  if (!localStorage.getItem("token")) {
    return (
      <>
        <div className={styles.signInAndSignUp}>
          <Link to={"/sign-in"}>
            <p>Sign In</p>
          </Link>
          <Link to={"/sign-up"}>
            <p>Sign Up</p>
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <div onClick={openNav} className={styles.account}>
        <img src={personUrl} alt="account" />
      </div>
      {openedNavigate ? <Navigate /> : <></>}
    </>
  );
};

export default Account;
