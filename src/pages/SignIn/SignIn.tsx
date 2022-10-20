import React from "react";
import { Link } from "react-router-dom";
import Form from "./Form";

import styles from "./SignIn.module.scss";

const SignIn: React.FC = () => {
  return (
    <div className={styles.signIp}>
      <h2 className={styles.title}>Sign In</h2>
      <Form />
      <p className={styles.sign_switch}>
        Don't have an account? <Link to="../sign-up">Sign Up</Link>
      </p>
    </div>
  );
};

export default SignIn;
