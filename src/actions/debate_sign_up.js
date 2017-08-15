import { push } from 'react-router-redux';
import * as types from './actionTypes';
import DebateSignUpApi from '../api/debate_sign_up';

export function debateSignupSuccess() {
  return { type: types.DEBATE_SIGN_UP_SUCCESS };
}

export function debateSignupRequest() {
  return { type: types.DEBATE_SIGN_UP_REQUEST };
}

export function debateSignupError(error) {
  return { type: types.DEBATE_SIGN_UP_ERROR, error };
}

export function debateSignup(formData) {
  return ((dispatch) => {
    dispatch(debateSignupRequest());
    return DebateSignUpApi
      .signup(formData)
      .then(response => response.json())
      .then((response) => {
        if (response.status === 200) {
          dispatch(push('/sorted_rooms'));
          dispatch(debateSignupError(''));
          dispatch(debateSignupSuccess());
        } else {
          dispatch(debateSignupError(response));
        }
      })
      .catch((error) => {
        dispatch(debateSignupError(error));
      });
  });
}
