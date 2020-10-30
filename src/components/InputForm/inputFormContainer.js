import React, { Component } from "react";

import { connect } from "react-redux";
import mainOperations from "../../redux/main/mainOperations";
import mainSelectors from "../../redux/main/mainSelectors";
import InputForm from "./InputForm";

class inputFormContainer extends Component {
  state = {
    name: "",
    number: "",
    onAlert: false,
  };

  inputTracking = (ev) => {
    ev.preventDefault();
    this.setState({ [ev.target.name]: ev.target.value });
  };

  submitForm = (ev) => {
    const { name, number } = this.state;
    ev.preventDefault();
    this.checkExistingName(name)
      ? this.showAlert()
      : this.props.addNewContact(name, number);
    this.resetInputForm();
  };

  checkExistingName = (targetName) => {
    return this.props.contacts
      .map((contact) => contact.name.toLowerCase().trim())
      .includes(targetName.toLowerCase().trim());
  };

  showAlert = () => {
    this.setState({ onAlert: true });
    setTimeout(this.closeAlert, 4000);
  };
  closeAlert = () => {
    this.setState({ onAlert: false });
  };

  resetInputForm = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    const showFilter = this.props.contacts.length > 1;
    return (
      <InputForm
        name={this.state.name}
        number={this.state.number}
        onAlert={this.state.onAlert}
        onFilter={showFilter}
        inputTracking={this.inputTracking}
        submitForm={this.submitForm}
        closeAlert={this.closeAlert}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: mainSelectors.stateContacts(state),
  };
};

const mapDispatchToProps = {
  addNewContact: mainOperations.addContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(inputFormContainer);
