import { createSelector } from "@reduxjs/toolkit";

import FirstLetterUpperCase from "../../utils/FirstUpperCase";

const stateContacts = (state) => state.contacts.items;
const stateFilter = (state) => state.contacts.filter;
const stateLoading = (state) => state.contacts.loading;

const getVisibleContacts = createSelector(
  [stateContacts, stateFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      (contact.name.toLowerCase() + contact.number.toLowerCase()).includes(
        filter.toLowerCase()
      )
    );
  }
);

const getCurrentContact = createSelector(
  [stateContacts, (state, id) => id],
  (contact, id) => {
    const currentContact = contact.find((item) => item.id === id);
    return {
      ...currentContact,
      name: currentContact && FirstLetterUpperCase(currentContact.name),
    };
  }
);

export default {
  stateContacts,
  stateFilter,
  stateLoading,
  getVisibleContacts,
  getCurrentContact,
};
