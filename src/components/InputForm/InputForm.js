import React from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import Input from "../Input/Input";
import Filter from "../Filter/Filter";
import Alert from "../Alert/Alert";

import styles from "./InputForm.module.css";

function InputForm({
  name,
  number,
  onAlert,
  onFilter,
  inputTracking,
  submitForm,
  closeAlert,
}) {
  return (
    <>
      <div className={styles.wrapper}>
        <CSSTransition
          in={onFilter}
          timeout={250}
          classNames={styles}
          unmountOnExit
        >
          <Filter />
        </CSSTransition>
        <form className={styles.inputForm} onSubmit={submitForm}>
          <label className={styles.label}>
            Name
            <Input
              type={"input"}
              name={"name"}
              placeholder={"Add name"}
              value={name}
              inputTracking={inputTracking}
              minLength={3}
              required
              autoFocus
            />
          </label>
          <label className={styles.label}>
            Number
            <Input
              type={"number"}
              name={"number"}
              placeholder={"Add phone"}
              value={number}
              inputTracking={inputTracking}
              minLength={10}
              required
            />
          </label>
          <button className={styles.btn} type={"submit"}>
            Add contact
          </button>
        </form>
      </div>
      <CSSTransition
        in={onAlert}
        timeout={250}
        classNames={styles}
        unmountOnExit
      >
        <Alert close={closeAlert} />
      </CSSTransition>
    </>
  );
}
InputForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  onAlert: PropTypes.bool.isRequired,
  onFilter: PropTypes.bool.isRequired,
  inputTracking: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
  closeAlert: PropTypes.func.isRequired,
};

export default InputForm;
