import React from "react";
import PropTypes from "prop-types";
import InputForm from "../../components/InputForm/inputFormContainer";
import Contacts from "../../components/Contacts/Contacts";
import Loader from "../../components/Loader/Loader";

import styles from "./Main.module.css";

function Main({ loading }) {
  return (
    <>
      <section className={styles.wrapper}>
        {loading && <Loader />}
        <InputForm />
        <Contacts />
      </section>
    </>
  );
}

Main.propTypes = {
  loading: PropTypes.bool.isRequired,
};
export default Main;
