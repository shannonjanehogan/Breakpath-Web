class SessionApi {
  static login(credentials) {
    return fetch('/login', {
      method: 'POST',
      body: {
        email: credentials.email,
        password: credentials.password,
      },
    });
  }

  static signup(data) {
    return fetch('/signup', {
      method: 'POST',
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
