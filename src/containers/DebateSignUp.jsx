import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as debateSignUpActions from '../actions/debate_sign_up';

class DebateSignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      partner_preference: null,
      debater_preference: 'debate_or_judge',
    };
    this.handleDebatePreferenceChange = this.handleDebatePreferenceChange.bind(this);
    this.handleDebateSignUpClick = this.handleDebateSignUpClick.bind(this);
  }

  handleDebatePreferenceChange = (event, index, value) => {
    const state = this.state;
    state.debater_preference = value;
    this.setState({ state });
  }

  handleDebateSignUpClick(event) {
    event.preventDefault();
    this.props.actions.debateSignup(this.state);
  }

  render() {
    const debatePreferenceSelectField =  (
      <SelectField
        style={{margin: 'auto', width: '100%'}}
        floatingLabelText="Debate Preference"
        value={this.state.debater_preference}
        onChange={this.handleDebatePreferenceChange}
      >
        <MenuItem value={'debate'} primaryText="Debate" />
        <MenuItem value={'judge'} primaryText="Judge" />
        <MenuItem value={'debate_or_judge'} primaryText="Indifferent" />
      </SelectField>
    );
    return (
      <div style={{margin: 'auto', width: '100%'}}>
        <div style={{margin: 'auto', width: '50%'}}>
           <TextField
             style={{margin: 'auto', width: '100%'}}
             hintText="Enter your name"
             floatingLabelText="Name"
             onChange = {(event, newValue) => this.setState({ name: newValue }) }
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

DebateSignUp.propTypes = {
  actions: PropTypes.shape({
    debateSignup: PropTypes.func.isRequired,
  }).isRequired,
  errorMessage: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    errorMessage: state.debate_sign_up.errorMessage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(debateSignUpActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DebateSignUp);
