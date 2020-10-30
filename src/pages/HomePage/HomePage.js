import React from "react";
import PropTypes from 'prop-types'
import styles from "./HomePage.module.css";
import { connect } from "react-redux";
import authSelectors from "../../redux/auth/authSelectors";
import routes from "../../routes";

function HomePage({ isAuth, getLogin, history }) {
  const toContacts = (ev) => {
    ev.preventDefault();
    history.push(routes.Contacts);
  };
  return (
    <>
      <h1 className={styles.title}>Hello!</h1>
      {!isAuth && (
        <>
          <p className={styles.text}>You don't authenticate yet.</p>
          <p className={styles.text}>
            Please <a href="/login">login</a>, or <a href="/register">create</a>{" "}
            new account.
          </p>
        </>
      )}
      {getLogin && (
        <>
          <p className={styles.text}>
            Nice to see you here again
            <span className={styles.accent}>{getLogin}.</span>
          </p>

          <button type="button" className={styles.btn} onClick={toContacts}>
            Contacts
          </button>
        </>
      )}
    </>
  );
}

HomePage.propTypes = {
  isAuth: PropTypes.string,
  getLogin: PropTypes.string,
  history: PropTypes.object,

}

const mapStateToProps = (state) => ({
  isAuth: authSelectors.isAuth(state),
  getLogin: authSelectors.getLogin(state),
});

export default connect(mapStateToProps)(HomePage);
