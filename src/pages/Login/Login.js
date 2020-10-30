import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import authOperations from "../../redux/auth/authOperations";
import AuthForm from "../../components/AuthForm/AuthForm";

class Login extends Component {
  static = {
    getlogin: PropTypes.func,
  };
  state = {
    email: "",
    password: "",
  };

  handleChange = (ev) => {
    ev.preventDefault();
    this.setState({ [ev.target.name]: ev.target.value });
  };

  handleSubmit = (ev) => {
    ev.preventDefault();
    this.props.getlogin({ ...this.state });
    this.setState({ email: "", password: "" });
  };

  render() {
    return (
      <AuthForm
        inputTracking={this.handleChange}
        submitForm={this.handleSubmit}
        emailValue={this.state.email}
        passValue={this.state.password}
      />
    );
  }
}

const mapDispatchToProps = {
  getlogin: authOperations.login,
};

export default connect(null, mapDispatchToProps)(Login);
