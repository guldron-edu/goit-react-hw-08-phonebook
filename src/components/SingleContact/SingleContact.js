import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import mainOperations from "../../redux/main/mainOperations";
import mainSelectors from "../../redux/main/mainSelectors";

import styles from "./SingleContact.module.css";

const SingleContact = ({ name, number, onDeleteContact }) => {
  return (
    <li className={styles.item}>
      <span className={styles.text}>{name}</span>

      <span className={styles.text}>{number}</span>
      <button type="button" onClick={onDeleteContact}>
        Delete
      </button>
    </li>
  );
};

SingleContact.propTypes = {
  id: PropTypes.string,
};

const mapStateToProps = (state, ownProps) => {
  return {
    ...mainSelectors.getCurrentContact(state, ownProps.id),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onDeleteContact: () => dispatch(mainOperations.deleteContact(ownProps.id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SingleContact);
