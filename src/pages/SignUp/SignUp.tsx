import React from "react";
import { Link } from "react-router-dom";
import Form from "./Form";

import styles from "./SignUp.module.scss";

const SignUp: React.FC = () => {
  return (
    <div className={styles.signUp}>
      <h2 className={styles.title}>Sign Up</h2>
      <Form />
      <p className={styles.sign_switch}>
        Already have an account? <Link to="../sign-in">Sign In</Link>
      </p>
    </div>
  );
};

export default SignUp;
