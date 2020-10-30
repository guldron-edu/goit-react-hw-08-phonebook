import axios from "axios";

import mainActions from "./mainActions";

const addContact = (name, number) => (dispatch) => {
  dispatch(mainActions.newContactRequst());

  axios
    .post("/contacts", { name, number })
    .then((response) => dispatch(mainActions.newContactSucces(response.data)))
    .catch((error) => dispatch(mainActions.newContactError(error)));
};

const getContacts = () => (dispatch) => {
  dispatch(mainActions.getContactsRequst());

  axios
    .get("/contacts")
    .then((response) => dispatch(mainActions.getContactsSucces(response.data)))
    .catch((error) => dispatch(mainActions.getContactsError(error)));
};

const deleteContact = (id) => (dispatch) => {
  dispatch(mainActions.delContactsRequst());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(mainActions.delContactsSucces(id)))
    .catch((error) => dispatch(mainActions.delContactsError(error)));
};

export default { addContact, getContacts, deleteContact };
