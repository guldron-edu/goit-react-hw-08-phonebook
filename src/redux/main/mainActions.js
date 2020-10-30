import { createAction } from "@reduxjs/toolkit";

const pushFilterToState = createAction("main/pushFilter");

const changeFilter = createAction("main/changeFilter");

const newContactRequst = createAction("main/addRequest");
const newContactSucces = createAction("main/addSucces");
const newContactError = createAction("main/addError");

const getContactsRequst = createAction("main/getRequest");
const getContactsSucces = createAction("main/getSucces");
const getContactsError = createAction("main/getError");

const delContactsRequst = createAction("main/delRequest");
const delContactsSucces = createAction("main/delSucces");
const delContactsError = createAction("main/delError");

export default {
  pushFilterToState,
  changeFilter,
  newContactRequst,
  newContactSucces,
  newContactError,
  getContactsRequst,
  getContactsSucces,
  getContactsError,
  delContactsRequst,
  delContactsSucces,
  delContactsError,
};
