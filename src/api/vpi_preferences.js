import qs from 'qs';

class VPIPreferencesApi {
  static create(data) {
    // fetch('/users', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     name: 'Hubot',
    //     login: 'hubot',
    //   })
    // })
    return fetch('http://localhost:8080/api/vpi_preferences/', {
      method: 'POST',
      headers: {
       'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      mode: 'no-cors',
      body: qs.stringify({
        "room_type": data.room_type,
        "judgeless_rooms": data.judgeless_rooms,
      }),
    });
  }
}

export default VPIPreferencesApi;
