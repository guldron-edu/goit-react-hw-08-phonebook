import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Input from "../Input/Input";
import mainSelectors from "../../redux/main/mainSelectors";

import styles from "./Filter.module.css";

const Filter = ({ filter }) => {
  return (
    <div className={styles.wrapper}>
      <Input
        type={"input"}
        name={"filter"}
        placeholder={"Search"}
        value={filter ? filter : ""}
      />
    </div>
  );
};

Filter.propTypes = {
  dispatch: PropTypes.func,
  filter: PropTypes.string,
};
const mapStateToProps = (state) => {
  return {
    filter: mainSelectors.stateFilter(state),
  };
};

export default connect(mapStateToProps)(Filter);
