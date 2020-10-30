import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import authOperations from "../redux/auth/authOperations";
import authSelectors from "../redux/auth/authSelectors";

import PrivatRoute from "../Routes/PrivatRoutes";
import PublicRoute from "../Routes/PublicRoutes";

import Layout from "./Layout/Layout";
import HomePage from "../pages/HomePage/HomePage";
import Main from "../pages/Main/MainContainer";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";

import routes from "../routes";

class App extends Component {
  componentDidMount() {
    this.props.onCheckAuth();
  }

  componentDidUpdate(prevProps, prevState) {}

  render() {
    return (
      <Layout>
        <Switch>
          <Route path={routes.HomePage} exact component={HomePage}></Route>
          <PublicRoute
            path={routes.RegisterPage}
            component={Register}
            exact
            restricted={false}
          />
          <PublicRoute
            path={routes.LoginPage}
            exact
            component={Login}
            restricted={true}
          />
          <PrivatRoute path={routes.Contacts} exact component={Main} />
        </Switch>
      </Layout>
    );
  }
}
const mapStateToProps = (state) => ({
  authError: authSelectors.getAuthError(state),
  contactsError: authSelectors.getContactsError(state),
});
const mapDispatchToProps = {
  onCheckAuth: authOperations.checkAuth,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
