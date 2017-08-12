import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as sessionActions from '../actions/session';

class SignUp extends Component {
  constructor(props){
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      username: '',
    };
    this.handleSignUpClick = this.handleSignUpClick.bind(this);
  }

  handleSignUpClick(event) {
    event.preventDefault();
    this.props.actions.signup(this.state);
  }

  render() {
    return (
      <div style={{margin: 'auto', width: '100%'}}>
        <div style={{margin: 'auto', width: '50%'}}>
         <TextField
           style={{margin: 'auto', width: '100%'}}
           hintText="Enter your First Name"
           floatingLabelText="First Name"
           onChange = {(event, newValue) => this.setState({ first_name: newValue })}
         />
         <br/>
         <TextField
           style={{margin: 'auto', width: '100%'}}
           hintText="Enter your Last Name"
           floatingLabelText="Last Name"
           onChange = {(event, newValue) => this.setState({ last_name: newValue })}
         />
         <br/>
         <TextField
           style={{margin: 'auto', width: '100%'}}
           hintText="Enter your Username"
           floatingLabelText="Username"
           onChange = {(event, newValue) => this.setState({ username: newValue })}
         />
         <br/>
         <TextField
           style={{margin: 'auto', width: '100%'}}
           hintText="Enter your Email"
           type="email"
           floatingLabelText="Email"
           onChange = {(event, newValue) => this.setState({ email: newValue })}
         />
         <br/>
         <TextField
           style={{margin: 'auto', width: '100%'}}
           type = "password"
           hintText="Enter your Password"
           floatingLabelText="Password"
           onChange = {(event, newValue) => this.setState({ password: newValue })}
         />
         <br/>
         <RaisedButton
           label="Sign Up"
           primary={true}
           style={{marginTop: '15px'}}
           onClick={(event) => this.handleSignUpClick(event)}
         />
        </div>
      </div>
    );
  }
}

SignUp.propTypes = {
  actions: PropTypes.shape({
    signup: PropTypes.func.isRequired,
  }).isRequired,
  errorMessage: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    errorMessage: state.session.errorMessage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
