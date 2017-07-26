import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

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
    // TODO call redux login action
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

export default NewSortedRoom;
