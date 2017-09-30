import qs from 'qs';

class SessionApi {
  static login(credentials) {
    return fetch('http://localhost:8080/api/session/token', {
      method: 'POST',
      mode: 'no-cors',
      body: {
        email: credentials.email,
        password: credentials.password,
      },
    });
  }

  static signup(data) {
    console.log('getting to the signup call in api', data)
    return fetch('http://localhost:8080/api/session/signup', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
       'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      body: qs.stringify({
        email: data.email,
        password: data.password,
        skill_level: data.skill_level,
        first_name: data.first_name,
        last_name: data.last_name,
      }),
    });
  }
}

export default SessionApi;
