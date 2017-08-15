import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as sessionActions from '../actions/session';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleLoginClick = this.handleLoginClick.bind(this);
   }

  handleLoginClick(event) {
    event.preventDefault();
    this.props.actions.login(this.state)
  }

  render() {
    return (
      <div style={{margin: 'auto', width: '100%'}}>
        <div style={{margin: 'auto', width: '50%'}}>
           <TextField
             style={{margin: 'auto', width: '100%'}}
             hintText="Enter your Username"
             floatingLabelText="Username"
             onChange = {(event, newValue) => this.setState({ username: newValue })}
           />
           <br/>
           <TextField
             style={{margin: 'auto', width: '100%'}}
             type="password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             onChange = {(event, newValue) => this.setState({ password: newValue })}
           />
           <br/>
           <RaisedButton label="Login" primary={true} style={{marginTop: '15px'}} onClick={(event) => this.handleLoginClick(event)}/>
         </div>
      </div>
    );
  }
}

Login.propTypes = {
  actions: PropTypes.shape({
    login: PropTypes.func.isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
