import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import authSelectors from "../../redux/auth/authSelectors";

import styles from "./USerMenu.module.css";

function UserMenu({ getLogin }) {
  return <span className={styles.text}>Hello, {getLogin}</span>;
}

UserMenu.propTypes = {
  getLogin: PropTypes.string,
};

const mapStateToProps = (state) => ({
  getLogin: authSelectors.getLogin(state),
});

export default connect(mapStateToProps)(UserMenu);
