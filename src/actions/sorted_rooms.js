import { push } from 'react-router-redux';
import * as types from './actionTypes';
import SortedRoomsApi from '../api/sorted_rooms';

export function isFetching(fetching) {
  return { type: types.FETCH_SORTED_ROOMS_REQUEST, fetching };
}

export function errorMessage(message) {
  return { type: types.SORTED_ROOMS_ERROR, message };
}

export function fetchSortedRoomsSuccess(sortedRooms) {
  return { type: types.FETCH_SORTED_ROOMS_SUCCESS, sortedRooms };
}

export function startRoomSorterRequest() {
  return { type: types.START_ROOM_SORTER_REQUEST };
}

export function startRoomSorterError() {
  return { type: types.START_ROOM_SORTER_ERROR };
}

export function startRoomSorterSuccess() {
  return { type: types.START_ROOM_SORTER_SUCCESS };
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

export function startRoomSorter() {
  return ((dispatch) => {
    dispatch(startRoomSorterRequest());
    return SortedRoomsApi
      .startRoomSorter()
      .then(response => response.json())
      .then((response) => {
        if (response.status === 200) {
          dispatch(push('/sorted_rooms'));
          dispatch(startRoomSorterError(''));
          dispatch(startRoomSorterSuccess());
        } else {
          dispatch(startRoomSorterError(response));
        }
      })
      .catch((error) => {
        dispatch(startRoomSorterError(error));
      });
  });
}
