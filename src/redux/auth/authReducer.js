import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import authActions from "./authActions";

const userToolkitReducer = createReducer(
  { name: null, email: null },
  {
    [authActions.createUserSucces]: (state, action) => action.payload.user,
    [authActions.loginSucces]: (state, action) => action.payload.user,
    [authActions.logoutSucces]: (state, action) =>
      (state = { name: null, email: null }),
    [authActions.getCurrentUsertSucces]: (state, action) => action.payload,
  }
);
const tokenToolkitReducer = createReducer(null, {
  [authActions.createUserSucces]: (state, action) => action.payload.token,
  [authActions.loginSucces]: (state, action) => action.payload.token,
  [authActions.logoutSucces]: () => null,
});

const errorToolkitReducer = createReducer(null, {
  [authActions.createUserError]: (state, action) => action.payload,
  [authActions.loginError]: (state, action) => action.payload,
  [authActions.logoutError]: (state, action) => action.payload,
  [authActions.getCurrentUsertError]: (state, action) => action.payload,
  [authActions.resetAuthError]: () => null,
});

export default combineReducers({
  user: userToolkitReducer,
  token: tokenToolkitReducer,
  error: errorToolkitReducer,
});
