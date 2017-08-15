import * as types from './actionTypes';
import SortedRoomsApi from '../api/sorted_rooms';

export function isFetching(fetching) {
  return { type: types.SORTED_ROOMS_IS_FETCHING, fetching };
}

export function errorMessage(message) {
  return { type: types.SORTED_ROOMS_ERROR, message };
}

export function fetchSortedRoomsSuccess(sortedRooms) {
  return { type: types.FETCH_SORTED_ROOMS_SUCCESS, sortedRooms };
}

export function fetchSortedRooms(queryParams) {
  return (dispatch) => {
    dispatch(isFetching(true));
    SortedRoomsApi
      .exec('fetchAll', queryParams)
      .then((response) => {
        if (response.status === 200) {
          const sortedRooms = response.body.data;
          dispatch(isFetching(false));
          dispatch(errorMessage(''));
          dispatch(fetchSortedRoomsSuccess(sortedRooms));
        } else {
          dispatch(isFetching(false));
          dispatch(errorMessage(response.status));
        }
      }).catch((error) => {
        dispatch(isFetching(false));
        dispatch(errorMessage(error.message));
      });
  };
}
