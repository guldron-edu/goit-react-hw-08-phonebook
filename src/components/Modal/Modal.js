import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import authSelectors from "../../redux/auth/authSelectors";
import PropTypes from "prop-types";

import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import authActions from "../../redux/auth/authActions";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function TransitionsModal({ authError, resetAuthError }) {
  const classes = useStyles();

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={authError}
        onClose={resetAuthError}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={authError}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Something went wrong</h2>
            <p id="transition-modal-description">{authError}</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

Modal.propTypes = {
  authError: PropTypes.string,
  resetAuthError: PropTypes.func,
};

const mapStateToProps = (state) => ({
  authError: authSelectors.getAuthError(state),
});
const mapDispatchToProps = {
  resetAuthError: authActions.resetAuthError,
};

export default connect(mapStateToProps, mapDispatchToProps)(TransitionsModal);
