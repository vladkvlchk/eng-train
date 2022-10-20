import React from "react";
import { Alert, Button, Snackbar } from "@mui/material";

import styles from "./index.module.scss";

const Submit: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const onSubmit = () => {
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <Button onClick={onSubmit}>Register</Button>
      <div className={styles.alert}>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            This is a success message!
          </Alert>
        </Snackbar>
      </div>
    </>
  );
};

export default Submit;
