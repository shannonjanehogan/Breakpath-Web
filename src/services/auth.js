const TOKEN = 'token';

/**
 * If not logged in, push to login page
 * @type {(p1:*)}
 */
const checkAuth = ((history) => {
  if (!localStorage[TOKEN]) {
    history.push('/login');
  }
});

/**
 * Check whether user is logged in
 * @type {Boolean}
 */
const loggedIn = (() => {
  if (!localStorage[TOKEN]) {
    return false;
  }
  return true;
});

/**
 * Set the token in the local storage
 * @type {(p1:*)}
 */
const logIn = ((token) => {
  localStorage[TOKEN] = token;
});

/**
 * Remove the token from local storage
 * @type {()}
 */
const logOut = (() => {
  localStorage.removeItem(TOKEN);
});

export { checkAuth, loggedIn, logIn, logOut };
