import React from "react";
import { Route, Redirect } from "react-router-dom";
import authSelectors from "../redux/auth/authSelectors";
import { connect } from "react-redux";

import routes from "../routes";

const publicRoute = ({
  component: Component,
  otherProps,
  isAuth,
  restricted,
}) => (
  <Route
    {...otherProps}
    render={(props) =>
      isAuth && restricted ? (
        <Redirect to={routes.Contacts} />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const mapStateToProps = (state) => ({
  isAuth: authSelectors.isAuth(state),
});

export default connect(mapStateToProps)(publicRoute);
