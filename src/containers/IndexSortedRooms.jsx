import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as sortedRoomsActions from '../actions/sorted_rooms';
import SortedRoom from '../components/SortedRoom';
import Loading from '../components/Loading';

class IndexSortedRooms extends Component {
  constructor(props){
    super(props);
    this.state = {
      sortedRooms: [],
    };
  }

  componentWillMount() {
    this.props.actions.fetchSortedRooms();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.sortedRooms) {
      this.setState({ sortedRooms: nextProps.sortedRooms });
    }
  }

  render() {
    if (this.state.sortedRooms.length === 0) {
      return (<Loading
        message="Looks like the rooms haven't been sorted yet!"
      />);
    }
    const sortedRoomsArray = this.state.sortedRooms.map((sortedRoom) => {
      return (<SortedRoom
        key={sortedRoom.id}
        judges={sortedRoom.judges}
        room={sortedRoom.room}
        skill_level={sortedRoom.skill_level}
        og={sortedRoom.og}
        oo={sortedRoom.oo}
        cg={sortedRoom.cg}
        co={sortedRoom.co}
      />);
    })
    return (
      <div>
        {sortedRoomsArray}
      </div>
    );
  }
}

IndexSortedRooms.propTypes = {
  actions: PropTypes.shape({
    fetchSortedRooms: PropTypes.func.isRequired,
  }).isRequired,
  errorMessage: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    errorMessage: state.sorted_rooms.errorMessage,
    sortedRooms: state.sorted_rooms.data,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sortedRoomsActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexSortedRooms);
