import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import authOperations from "../../redux/auth/authOperations";
import authSelectors from "../../redux/auth/authSelectors";

import UserMenu from "../UserMenu/UserMenu.js";

import PropTypes from "prop-types";
import routes from "../../routes";

import { ReactComponent as ReactLogo } from "../../user.svg";
import { CSSTransition } from "react-transition-group";

import styles from "./Nav.module.css";

class Nav extends Component {
  static propTypes = {
    getLogout: PropTypes.func.isRequired,
    getLogin: PropTypes.string,
    isAuth: PropTypes.string,
  };
  state = {
    show: "false",
  };

  componentDidMount() {
    this.setState({
      show: "false",
    });
  }

  submenu = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  exit = () => {
    this.props.getLogout();
    this.submenu();
  };

  render() {
    return (
      <nav className={styles.nav}>
        {this.props.getLogin && (
          <CSSTransition
            in={true}
            appear={true}
            timeout={500}
            classNames={styles}
            unmountOnExit
          >
            <UserMenu />
          </CSSTransition>
        )}

        <span className={styles.text} onClick={this.submenu}>
          <ReactLogo />
        </span>

        <ul className={this.state.show ? styles.submenu : styles.submenuShow}>
          {!this.props.isAuth && (
            <li className={styles.el}>
              <NavLink
                to={routes.LoginPage}
                className={styles.link}
                activeClassName={styles.activeLink}
                exact
                onClick={this.submenu}
              >
                Login
              </NavLink>
            </li>
          )}
          <li className={styles.el}>
            <NavLink
              to={routes.RegisterPage}
              className={styles.link}
              activeClassName={styles.activeLink}
              exact
              onClick={this.submenu}
            >
              Register
            </NavLink>
          </li>

          {this.props.isAuth && (
            <li className={styles.el}>
              <p className={styles.textExit} onClick={this.exit}>
                Exit
              </p>
            </li>
          )}
        </ul>
      </nav>
    );
  }
}

// UserMenu.propTypes = {

// }

const mapStateToProps = (state) => ({
  isAuth: authSelectors.isAuth(state),
  getLogin: authSelectors.getLogin(state),
});

const mapDispatchToProps = {
  getLogout: authOperations.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
