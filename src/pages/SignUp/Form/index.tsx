import React from "react";

import styles from "./index.module.scss";
import { Alert, Box, Button, Snackbar, TextField } from "@mui/material";
import {
  isValidEmail,
  isValidFirstName,
  isValidLastName,
  isValidPassword,
} from "../../../helper/validation";
import Submit from "./Submit";

const Form: React.FC = () => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirm, setConfirm] = React.useState("");
  const [errorFirstName, setErrorFirstName] = React.useState(false);
  const [errorLastName, setErrorLastName] = React.useState(false);
  const [errorEmail, setErrorEmail] = React.useState(false);
  const [errorPassword, setErrorPassword] = React.useState(false);
  const [errorConfirm, setErrorConfirm] = React.useState(false);
  const [confirmColor, setConfirmColor] = React.useState(undefined);
  const [openAlert, setOpenAlert] = React.useState(false);

  const onSubmit = (event) => {
    setOpenAlert(true);
    // setTimeout(1000, () => setAlert(false));
    // if (
    //   errorFirstName ||
    //   errorLastName ||
    //   errorEmail ||
    //   errorPassword ||
    //   // ||
    //   !firstName ||
    //   !email ||
    //   !password ||
    //   !confirm
    // ) {
    //   alert("error");
    // } else {
    //   alert(JSON.stringify({ firstName, lastName, email, password }));
    // }
  };

  //// onChanges()
  const onChangeFirstName = (event) => {
    setFirstName(event.target.value);
    if (errorFirstName) {
      setErrorFirstName(!isValidFirstName(firstName));
    }
  };

  const onChangeLastName = (event) => {
    setLastName(event.target.value);
    if (errorLastName) {
      setErrorLastName(!isValidLastName(lastName));
    }
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
    if (errorEmail) {
      setErrorEmail(!isValidEmail(email));
    }
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
    if (errorPassword) {
      setErrorPassword(!isValidPassword(password));
    }
  };

  const onChangeConfirm = (event) => {
    setConfirm(event.target.value);

    if (password === event.target.value) {
      setConfirmColor("success");
    } else {
      setConfirmColor("error");
    }
  };

  // onBlurs()
  const onBlurFirstName = () => {
    setErrorFirstName(!isValidFirstName(firstName));
  };

  const onBlurLastName = () => {
    setErrorLastName(!isValidLastName(lastName));
  };

  const onBlurEmail = () => {
    setErrorEmail(!isValidEmail(email));
  };

  const onBlurPassword = () => {
    setErrorPassword(!isValidPassword(password));
  };

  const onBlurConfirm = () => {
    if (!(password === confirm)) {
      setErrorConfirm(true);
    }
  };

  // others
  const handleCloseAlert = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };

  return (
    <div>
      <div className={styles.form} onSubmit={onSubmit}>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
            display: "flex",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            className="input"
            autoFocus
            label="First name*"
            variant="outlined"
            margin="normal"
            onChange={onChangeFirstName}
            error={errorFirstName}
            onBlur={onBlurFirstName}
          />
          <TextField
            className="input"
            label="Last name"
            variant="outlined"
            margin="normal"
            onChange={onChangeLastName}
            error={errorLastName}
            onBlur={onBlurLastName}
          />
        </Box>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "51.5ch" },
            display: "flex",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            label="email*"
            variant="outlined"
            margin="normal"
            fullWidth
            onChange={onChangeEmail}
            error={errorEmail}
            onBlur={onBlurEmail}
          />
        </Box>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
            display: "flex",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            label="password*"
            type="password"
            variant="outlined"
            margin="normal"
            onChange={onChangePassword}
            onBlur={onBlurPassword}
            fullWidth
            error={errorPassword}
            helperText={
              "Use 8 or more characters with mix of letters, capital letters and numbers"
            }
          />
          <TextField
            label="confirm password*"
            type="password"
            variant="outlined"
            margin="normal"
            fullWidth
            onChange={onChangeConfirm}
            onBlur={onBlurConfirm}
            color={confirmColor}
            error={errorConfirm}
          />
        </Box>
        <Button onClick={onSubmit}>Register</Button>
        <Submit />
        <Button onClick={onSubmit}>Register</Button>
        <div className={styles.alert}>
          <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleCloseAlert}>
            <Alert
              onClose={handleCloseAlert}
              severity="success"
              sx={{ width: "100%" }}
            >
              This is a success message!
            </Alert>
          </Snackbar>
        </div>
      </div>
    </div>
  );
};

export default Form;
