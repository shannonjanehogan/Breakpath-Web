import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class DebateSignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      preferences: {
        first_name: '',
        last_name: '',
        partner_preference: null,
        debate_preference: 'debate_or_judge',
        skill_level: 'nov',
      },
    };
    this.handleDebatePreferenceChange = this.handleDebatePreferenceChange.bind(this);
    this.handleSkillLevelChange = this.handleSkillLevelChange.bind(this);
    this.handleDebateSignUpClick = this.handleDebateSignUpClick.bind(this);
  }

  handleDebatePreferenceChange = (event, index, value) => {
    const state = this.state;
    state.preferences.debate_preference = value;
    this.setState({ state });
  }

  handleSkillLevelChange = (event, index, value) => {
    const state = this.state;
    state.preferences.skill_level = value;
    this.setState({ state });
  }

  handleDebateSignUpClick(event) {
    event.preventDefault();
    // TODO call redux login action
  }

  render() {
    const debatePreferenceSelectField =  (
      <SelectField
        style={{margin: 'auto', width: '100%'}}
        floatingLabelText="Debate Preference"
        value={this.state.preferences.debate_preference}
        onChange={this.handleDebatePreferenceChange}
      >
        <MenuItem value={'debate'} primaryText="Debate" />
        <MenuItem value={'judge'} primaryText="Judge" />
        <MenuItem value={'debate_or_judge'} primaryText="Indifferent" />
      </SelectField>
    );
    const skillLevelSelectField =  (
      <SelectField
        style={{margin: 'auto', width: '100%'}}
        floatingLabelText="Skill Level"
        value={this.state.preferences.skill_level}
        onChange={this.handleSkillLevelChange}
      >
        <MenuItem value={'nov'} primaryText="Novice" />
        <MenuItem value={'pro'} primaryText="Pro" />
        <MenuItem value={'advanced'} primaryText="Worlds" />
      </SelectField>
    );
    return (
      <div style={{margin: 'auto', width: '100%'}}>
        <div style={{margin: 'auto', width: '50%'}}>
           <TextField
             style={{margin: 'auto', width: '100%'}}
             hintText="Enter your first name"
             floatingLabelText="First Name"
             onChange = {(event, newValue) => this.setState({ first_name: newValue })}
           />
           <br/>
           <TextField
             style={{margin: 'auto', width: '100%'}}
             hintText="Enter your last name"
             floatingLabelText="Last Name"
             onChange = {(event, newValue) => this.setState({ last_name: newValue })}
           />
           <br/>
           <TextField
             style={{margin: 'auto', width: '100%'}}
             hintText="Enter your partner preference"
             floatingLabelText="Partner Preference"
             onChange = {(event, newValue) => this.setState({ partner_preference: newValue })}
           />
           <br/>
           {debatePreferenceSelectField}
           <br/>
           {skillLevelSelectField}
           <br/>
           <RaisedButton
             label="Sign Up to Debate"
             primary={true}
             style={{marginTop: '15px'}}
             onClick={(event) => this.handleDebateSignUpClick(event)}
           />
         </div>
      </div>
    );
  }
}

export default DebateSignUp;
