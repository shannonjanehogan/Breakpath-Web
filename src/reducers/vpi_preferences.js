import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function vpiPreferencesReducer(state = initialState, action) {
  switch (action.type) {
    case types.VPI_PREFERENCES_SUCCESS:
      return { ...state, errorMessage: '' };
    case types.VPI_PREFERENCES_ERROR:
      return { ...state, errorMessage: action.error };
    case types.VPI_PREFERENCES_REQUEST:
      return { ...state, isFetching: action.fetching };
    default:
      return state;
  }
}
