import React from "react";
import personUrl from "../../assets/icons/person.svg";
import Navigate from "../Navigate";
import styles from "./account.module.scss";

const Account: React.FC = () => {
  const [openedNavigate, setOpenedNavigate] = React.useState(false);

  const openNav = () => {
    setOpenedNavigate(!openedNavigate);
  };

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
