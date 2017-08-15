import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function sortedRoomsReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_SORTED_ROOMS_SUCCESS:
      return { ...state, errorMessage: '' };
    case types.SORTED_ROOMS_ERROR:
      return { ...state, errorMessage: action.error };
    case types.FETCH_SORTED_ROOMS_REQUEST:
      return { ...state, isFetching: action.fetching };
    default:
      return state;
  }
}
