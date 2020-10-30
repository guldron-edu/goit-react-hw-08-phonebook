import { createAction } from "@reduxjs/toolkit";

const createUserRequst = createAction("auth/createRequest");
const createUserSucces = createAction("auth/createSucces");
const createUserError = createAction("auth/createError");

const loginRequst = createAction("auth/loginRequest");
const loginSucces = createAction("auth/loginSucces");
const loginError = createAction("auth/loginError");

const logoutRequst = createAction("auth/logoutRequest");
const logoutSucces = createAction("auth/logoutSucces");
const logoutError = createAction("auth/logoutError");

const getCurrentUsertRequst = createAction("auth/getCurrentUsertRequest");
const getCurrentUsertSucces = createAction("auth/getCurrentUsertSucces");
const getCurrentUsertError = createAction("auth/getCurrentUsertError");

const resetAuthError = createAction("auth/resetAuthError");

export default {
  createUserRequst,
  createUserSucces,
  createUserError,
  loginRequst,
  loginSucces,
  loginError,
  logoutRequst,
  logoutSucces,
  logoutError,
  getCurrentUsertRequst,
  getCurrentUsertSucces,
  getCurrentUsertError,
  resetAuthError,
};
