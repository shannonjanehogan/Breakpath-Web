import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class DebateSignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      partnerPreference: null,
      debatePreference: 'DebateOrJudge',
      pro: false,
    };
    this.onSaveClick = this.onSaveClick.bind(this);
    this.onFormTextUpdate = this.onFormTextUpdate.bind(this);
  }

  onSaveClick(event) {
    event.preventDefault();
    const field = event.target.name;
    const state = this.stat;
    state[field] = event.target.value;
    return this.setState({ state });

  }

  onFormTextUpdate(event) {

  }

  render() {
    const debatePreferences = ['debate', 'judge', 'either'];
    return(
      <form>
        <TextField>
          key={0}
          hintText={'Name'}
          errorText={''}
          errorStyle={{ float: 'left' }}
          name={'Name'}
          floatingLabelText={'Name'}
          onChange={this.onFormTextUpdate}
          value={this.state.name}
        </TextField>
        <TextField>
          key={0}
          hintText={'Pro or nov?'}
          errorText={''}
          errorStyle={{ float: 'left' }}
          name={'Name'}
          floatingLabelText={'Name'}
          onChange={this.onFormTextUpdate}
          value={this.state.pro}
        </TextField>
        <RaisedButton
          label="Save"
          style={{ width: '10px', marginTop: '30px' }}
          onClick={this.onSaveClick}
          disabled={false}
        />
      </form>
    );
  }
}

export default DebateSignUp;
