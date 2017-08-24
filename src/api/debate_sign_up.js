import qs from 'qs';

class DebateSignUpApi {
  static signup(data) {
    return fetch('http://localhost:8080/api/debate_sign_up/', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
       'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      body: qs.stringify({
        name: data.name,
        partner_preference: data.partner_preference,
        debater_preference: data.debater_preference,
      }),
    });
  }
}

export default DebateSignUpApi;
