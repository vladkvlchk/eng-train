import React from 'react';
import Form from './Form';

import styles from './SignUp.module.scss'

const SignUp : React.FC = () => {
    return (
        <div className={styles.signUp}>
            <h2 className={styles.title}>Sign Up</h2>
            <Form />
        </div>
    )
}

export default SignUp