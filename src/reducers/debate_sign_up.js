import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function debateSignUpReducer(state = initialState, action) {
  switch (action.type) {
    case types.DEBATE_SIGN_UP_SUCCESS:
      return { ...state, errorMessage: '' };
    case types.DEBATE_SIGN_UP_ERROR:
      return { ...state, errorMessage: action.error };
    case types.DEBATE_SIGN_UP_REQUEST:
      return { ...state, isFetching: true };
    default:
      return state;
  }
}
