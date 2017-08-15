import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function sortedRoomsReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_SORTED_ROOMS_SUCCESS:
      return { ...state, errorMessage: '', datum: action.sortedRooms };
    case types.SORTED_ROOMS_ERROR:
      return { ...state, errorMessage: action.error };
    case types.FETCH_SORTED_ROOMS_REQUEST:
      return { ...state, isFetching: action.fetching };
    case types.START_ROOM_SORTER_SUCCESS:
      return { ...state, errorMessage: '' };
    case types.START_ROOM_SORTER_ERROR:
      return { ...state, errorMessage: action.error };
    case types.START_ROOM_SORTER_REQUEST:
      return { ...state, isFetching: true };
    default:
      return state;
  }
}
