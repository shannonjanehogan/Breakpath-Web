class DebateSignUpApi {
  static signup(data) {
    return fetch('https://breakpath-api.herokuapp.com/sign_up_preferences', {
      method: 'POST',
      mode: 'no-cors',
      body: {
        first_name: data.first_name,
        last_name: data.last_name,
        partner_preference: data.partner_preference,
        skill_level: data.skill_level,
        debate_preference: data.debate_preference,
      },
    });
  }
}

export default DebateSignUpApi;
