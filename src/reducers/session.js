import * as types from '../actions/actionTypes';
import { loggedIn } from '../services/auth';

const initialState = {
  session: loggedIn(),
  isFetching: false,
  errorMessage: '',
};

export default function sessionReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOG_IN_SUCCESS:
      return { ...state, session: loggedIn() };
    case types.LOG_IN_ERROR:
      return { ...state, errorMessage: action.error };
    case types.LOG_IN_REQUEST:
      return { ...state, isFetching: true };
    case types.LOG_OUT_SUCCESS:
      return { ...state, session: loggedIn() };
    case types.SIGN_UP_SUCCESS:
      return { ...state, session: loggedIn() };
    case types.SIGN_UP_ERROR:
      return { ...state, errorMessage: action.error };
    case types.SIGN_UP_REQUEST:
      return { ...state, isFetching: true };
    default:
      return state;
  }
}
