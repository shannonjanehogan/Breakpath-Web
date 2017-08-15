import * as types from './actionTypes';
import VPIPreferencesApi from '../api/session';

export function vpiPreferencesCreateSuccess() {
  return { type: types.VPI_PREFERENCES_SUCCESS };
}

export function vpiPreferencesCreateRequest() {
  return { type: types.VPI_PREFERENCES_REQUEST };
}

export function vpiPreferencesError(error) {
  return { type: types.VPI_PREFERENCES_ERROR, error };
}

export function createVPIPreferences(formData) {
  return ((dispatch) => {
    dispatch(vpiPreferencesCreateRequest());
    return VPIPreferencesApi
      .signup(formData)
      .then(response => response.json())
      .then((response) => {
        if (response.status === 200) {
          dispatch(vpiPreferencesError(''));
          dispatch(vpiPreferencesCreateSuccess());
        } else {
          dispatch(vpiPreferencesError(response));
        }
      })
      .catch((error) => {
        dispatch(vpiPreferencesError(error));
      });
  });
}
