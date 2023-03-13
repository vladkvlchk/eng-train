import React from "react";
import { useNavigate } from "react-router-dom";
import { Alert, Box, Button, Portal, Snackbar, TextField } from "@mui/material";
import jwt_decode from 'jwt-decode'


import styles from "./index.module.scss";
import { UseAppDispatch } from '../../../redux/store';
import {
  isValidEmail,
  isValidPassword,
} from "../../../helper/validation";
import axios from "../../../axios";
import { setUser } from "../../../redux/slices/user/slice";
import { User } from "../../../redux/slices/user/types";

const Form: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = UseAppDispatch();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errorEmail, setErrorEmail] = React.useState(false);
  const [errorPassword, setErrorPassword] = React.useState(false);
  const [openAlert, setOpenAlert] = React.useState(false);

  const onSubmit = async () => {
    try{
      const { data } = await axios.post('/auth/login', {email, password})
      window.localStorage.setItem('token', data.token);
      const decoded : User = await jwt_decode(data.token);
      dispatch(setUser(decoded))
      navigate('/');
    } catch (e) {
      setOpenAlert(true);
    }
  };

  //// onChanges()
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

  // onBlurs()
  const onBlurEmail = () => {
    setErrorEmail(!isValidEmail(email));
  };

  const onBlurPassword = () => {
    setErrorPassword(!isValidPassword(password));
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
            autoFocus
            label="email"
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
            label="password"
            type="password"
            variant="outlined"
            margin="normal"
            onChange={onChangePassword}
            onBlur={onBlurPassword}
            fullWidth
            error={errorPassword}
          />
        </Box>
        <Button
          variant="contained"
          sx={{ m: 1 }}
          disabled={!email || !password || errorEmail || errorPassword}
          onClick={onSubmit}
        >
          Log In
        </Button>
        <Portal container={document.body}>
          <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            open={openAlert}
            autoHideDuration={6000}
            onClose={handleCloseAlert}
          >
            <Alert
              onClose={handleCloseAlert}
              severity="success"
              sx={{ width: "100%" }}
            >
              This is a success message!
            </Alert>
          </Snackbar>
        </Portal>
      </div>
    </div>
  );
};

export default Form;
