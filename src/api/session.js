class SessionApi {
  static login(credentials) {
    return fetch('https://breakpath-api.herokuapp.com/login', {
      method: 'POST',
      mode: 'no-cors',
      body: {
        email: credentials.email,
        password: credentials.password,
      },
    });
  }

  static signup(data) {
    return fetch('https://breakpath-api.herokuapp.com/signup', {
      method: 'POST',
      mode: 'no-cors',
      body: {
        email: data.email,
        password: data.password,
        username: data.username,
        first_name: data.first_name,
        last_name: data.last_name,
      },
    });
  }
}

export default SessionApi;
