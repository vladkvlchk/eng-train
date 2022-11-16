import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import styles from "./navigation.module.scss";
import logoutUrl from "../../assets/icons/log-out.svg";

const Navigate = () => {
  const navigate = useNavigate();

  const onClickLogOut = () => {
    window.localStorage.removeItem("token");
    navigate("/sign-in");
  };
  return (
    <nav className={styles.navigation}>
      <Button
        startIcon={<img src={logoutUrl} alt="[log out]" />}
        onClick={onClickLogOut}
      >
        Log out
      </Button>
    </nav>
  );
};

export default Navigate;
