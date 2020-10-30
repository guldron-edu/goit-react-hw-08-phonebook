const isAuth = (state) => state.auth.token;

const getLogin = (state) => state.auth.user.name;

const getAuthError = (state) => state.auth.error;
const getContactsError = (state) => state.contacts.contactsError;

export default { isAuth, getLogin, getAuthError, getContactsError };
