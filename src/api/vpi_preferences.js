class VPIPreferencesApi {
  static create(data) {
    return fetch('https://breakpath-api.herokuapp.com/vpi_preferences', {
      method: 'POST',
      mode: 'no-cors',
      body: {
        room_type: data.room_type,
        judgeless_rooms: data.judgeless_rooms,
      },
    });
  }
}

export default VPIPreferencesApi;
