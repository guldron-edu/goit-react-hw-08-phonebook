import React, { Component } from "react";
import PropTypes from "prop-types";
import SingleContact from "../SingleContact/SingleContact";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import styles from "./Contacts.module.css";
import { connect } from "react-redux";

import mainOperations from "../../redux/main/mainOperations";
import mainSelectors from "../../redux/main/mainSelectors";

class Contacts extends Component {
  componentDidMount() {
    this.props.onGetContacts();
  }

  render() {
    return (
      <section className={styles.contacts}>
        <div className={styles.contactsHead}>
          <p className={styles.text}>Name</p>
          <p className={styles.text}>Phone</p>
        </div>
        <TransitionGroup component="ul" className={styles.list}>
          {this.props.contacts.map((contact) => (
            <CSSTransition key={contact.id} timeout={250} classNames={styles}>
              <SingleContact id={contact.id} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </section>
    );
  }
}

Contacts.propTypes = {
  onGetContacts: PropTypes.func,
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

const mapStateToProps = (state) => {
  return {
    contacts: mainSelectors.getVisibleContacts(state),
  };
};

const mapDispatchToProps = {
  onGetContacts: mainOperations.getContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
