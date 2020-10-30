import React from "react";
import { Route, Redirect } from "react-router-dom";
import authSelectors from "../redux/auth/authSelectors";
import { connect } from "react-redux";

import routes from "../routes";

const PrivateRoute = ({ component: Component, otherProps, isAuth }) => (
  <Route
    {...otherProps}
    render={(props) =>
      isAuth ? <Component {...props} /> : <Redirect to={routes.HomePage} />
    }
  />
);

const mapStateToProps = (state) => ({
  isAuth: authSelectors.isAuth(state),
});

export default connect(mapStateToProps)(PrivateRoute);
