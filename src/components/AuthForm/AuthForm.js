import React from "react";
import PropTypes from "prop-types";
import styles from "./AuthForm.module.css";

import Modal from "../Modal/Modal";

function AuthForm({
  inputTracking,
  submitForm,
  emailValue,
  passValue,
  nameValue,
}) {
  return (
    <div className={styles.formWrapper}>
      <form className={styles.authForm} onSubmit={submitForm}>
        <h2 className={styles.title}>Let's get LogIn.</h2>

        <div className={styles.wrapper}>
          {nameValue !== undefined && (
            <input
              className={styles.input}
              type="text"
              name="name"
              placeholder="Login"
              onChange={inputTracking}
              value={nameValue}
            ></input>
          )}
          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder="Email"
            onChange={inputTracking}
            value={emailValue}
          ></input>

          <input
            className={styles.input}
            type="password"
            name="password"
            placeholder="Password"
            onChange={inputTracking}
            value={passValue}
          ></input>
        </div>
        <button className={styles.btn} type="submit">
          <span className={styles.btnText}>LogIn</span>
        </button>
      </form>
      <Modal />
    </div>
  );
}

AuthForm.propTypes = {
  emailValue: PropTypes.string,
  nameValue: PropTypes.string,
  passValue: PropTypes.string,
  inputTracking: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
};

export default AuthForm;
