import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as vpiPreferencesActions from '../actions/vpi_preferences';
import * as sortedRoomsAction from '../actions/sorted_rooms';

class NewSortedRoom extends Component {
  constructor(props){
    super(props);
    this.state = {
      room_type: 'proam',
      judgeless_rooms: false,
    };
    this.handleNewSortedRoomClick = this.handleNewSortedRoomClick.bind(this);
    this.handleRoomTypeChange = this.handleRoomTypeChange.bind(this);
    this.handleJudgelessRoomsChange = this.handleJudgelessRoomsChange.bind(this);
   }

  handleNewSortedRoomClick(event) {
    event.preventDefault();
    this.props.actions.createVPIPreferences;
    this.props.sortedRoomsActions.startRoomSorter;
  }

  handleRoomTypeChange = (event, index, value) => {
    const state = this.state;
    state.room_type = value;
    this.setState({ state });
  }

  handleJudgelessRoomsChange = (event, index, value) => {
    const state = this.state;
    state.judgeless_rooms = value;
    this.setState({ state });
  }

  render() {
    return (
      <div style={{margin: 'auto', width: '100%'}}>
        <div style={{margin: 'auto', width: '50%'}}>
          <SelectField
            style={{margin: 'auto', width: '100%'}}
            floatingLabelText="Room Type"
            value={this.state.room_type}
            onChange={this.handleRoomTypeChange}
          >
            <MenuItem value={'nov'} primaryText="Novice" />
            <MenuItem value={'pro'} primaryText="Pro" />
            <MenuItem value={'advanced'} primaryText="Advanced" />
            <MenuItem value={'proam'} primaryText="Proam" />
          </SelectField>
          <br/>
          <SelectField
            style={{margin: 'auto', width: '100%'}}
            floatingLabelText="Judgeless Rooms"
            value={this.state.judgeless_rooms}
            onChange={this.handleJudgelessRoomsChange}
          >
           <MenuItem value={true} primaryText="Allow judgeless rooms" />
           <MenuItem value={false} primaryText="No judgeless rooms" />
          </SelectField>
          <br/>
          <RaisedButton
            label="Start Room Sorter"
            primary={true}
            style={{marginTop: '15px'}}
            onClick={(event) => this.handleNewSortedRoomClick(event)}
          />
         </div>
      </div>
    );
  }
}

NewSortedRoom.propTypes = {
  actions: PropTypes.shape({
    createVPIPreferences: PropTypes.func.isRequired,
  }).isRequired,
  sortedRoomsActions: PropTypes.shape({
    startRoomSorter: PropTypes.func.isRequired,
  }).isRequired,
  errorMessage: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    errorMessage: state.vpi_preferences.errorMessage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(vpiPreferencesActions, dispatch),
    sortedRoomsActions: bindActionCreators(sortedRoomsAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewSortedRoom);
