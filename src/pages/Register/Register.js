import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AuthForm from "../../components/AuthForm/AuthForm";

import authOperations from "../../redux/auth/authOperations";

class Register extends Component {
  static = {
    getRegister: PropTypes.func,
  };

  state = {
    name: "",
    email: "",
    password: "",
  };

  handleChange = (ev) => {
    ev.preventDefault();
    this.setState({ [ev.target.name]: ev.target.value });
  };

  handleSubmit = (ev) => {
    ev.preventDefault();
    this.props.getRegister({ ...this.state });
  };
  render() {
    return (
      <AuthForm
        inputTracking={this.handleChange}
        submitForm={this.handleSubmit}
        nameValue={this.state.name}
        emailValue={this.state.email}
        passValue={this.state.password}
      />
    );
  }
}

const mapDispatchToProps = {
  getRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(Register);
{
  /* запилить чекбокс с правилами в выплывающем окне по ссылке */
}
