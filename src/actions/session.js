import { push } from 'react-router-redux';
import * as types from './actionTypes';
import SessionApi from '../api/session';
import { logIn } from '../services/auth';

export function loginSuccess() {
  return { type: types.LOG_IN_SUCCESS };
}

export function loginRequest() {
  return { type: types.LOG_IN_REQUEST };
}

export function loginError(error) {
  return { type: types.LOG_IN_ERROR, error };
}

export function logoutSuccess() {
  return { type: types.LOG_OUT_SUCCESS };
}

export function signupSuccess() {
  return { type: types.SIGN_UP_SUCCESS };
}

export function signupRequest() {
  return { type: types.SIGN_UP_REQUEST };
}

export function signupError(error) {
  return { type: types.SIGN_UP_ERROR, error };
}


export function login(credentials) {
  return ((dispatch) => {
    dispatch(loginRequest());
    return SessionApi
      .login(credentials)
      .then(response => response.json())
      .then((response) => {
        if (response.token) {
          logIn(response.token);
          dispatch(push('/debates/new'));
          dispatch(loginError(''));
          dispatch(loginSuccess());
        } else {
          dispatch(loginError(response));
        }
      })
      .catch((error) => {
        dispatch(loginError(error));
      });
  });
}

export function signup(formData) {
  return ((dispatch) => {
    dispatch(signupRequest());
    return SessionApi
      .signup(formData)
      .then(response => response.json())
      .then((response) => {
        if (response.token) {
          signup(response.token);
          dispatch(push('/debates/new'));
          dispatch(signupError(''));
          dispatch(signupSuccess());
        } else {
          dispatch(signupError(response));
        }
      })
      .catch((error) => {
        dispatch(signupError(error));
      });
  });
}
