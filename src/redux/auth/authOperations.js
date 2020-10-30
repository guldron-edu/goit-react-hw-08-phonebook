import axios from "axios";
import authActions from "./authActions";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com/";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset(token) {
    axios.defaults.headers.common.Authorization = ``;
  },
};

const register = (registerInfo) => (dispatch) => {
  dispatch(authActions.createUserRequst());

  axios
    .post("/users/signup", registerInfo)
    .then((response) => {
      token.set(response.data.token);
      dispatch(authActions.createUserSucces(response.data));
    })
    .catch((error) => {
      dispatch(authActions.createUserError(error.message));
    });
};

const login = (loginInfo) => (dispatch) => {
  dispatch(authActions.loginRequst());

  axios
    .post("/users/login", loginInfo)
    .then((response) => {
      token.set(response.data.token);
      dispatch(authActions.loginSucces(response.data));
    })
    .catch((error) => {
      dispatch(authActions.loginError(error.message));
    });
};

const logout = () => (dispatch) => {
  dispatch(authActions.logoutRequst());

  axios
    .post("/users/logout")
    .then((response) => {
      token.unset();
      dispatch(authActions.logoutSucces());
    })
    .catch((error) => {
      dispatch(authActions.logoutError(error.message));
    });
};

const checkAuth = () => (dispatch, getState) => {
  const currentState = getState();
  if (!currentState.auth.token) {
    return;
  }
  token.set(currentState.auth.token);
  dispatch(authActions.getCurrentUsertRequst());

  axios
    .get("/users/current")
    .then((response) => {
      dispatch(authActions.getCurrentUsertSucces(response.data));
    })
    .catch((error) => {
      dispatch(authActions.getCurrentUsertError(error.message));
    });
};

export default { register, login, logout, checkAuth };
