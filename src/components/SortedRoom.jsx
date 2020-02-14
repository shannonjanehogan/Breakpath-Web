import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import TeamCard from './TeamCard';

const SortedRoom = ((props) => {
  const judges = props.judges.map((judge) => {
    return (<Chip key={judge.id}>
      <Avatar size={32}> {judge.skill_level} </Avatar>
      {judge.first_name}
    </Chip>);
  })
  return (
    <div style={{margin: 'auto', width: '100%'}}>
      <div style={{margin: 'auto', width: '70%'}}>
        <h2 style={{textAlign: 'center'}}> Sorted Rooms </h2>
        <Card>
          <CardTitle title={props.room} subtitle={props.skill_level} style={{margin: 'auto'}} />
          <CardText style={{paddingTop: 0}}>
            <h4> Judges </h4>
            {judges}
          </CardText>

          <TeamCard
            position="OG"
            teamType="Proam"
            team={props.og}
            styles={{width: '50%'}}
          />

          <TeamCard
            position="OO"
            teamType="Proam"
            team={props.oo}
            styles={{width: '50%', float: 'right', marginTop: -190}}
          />

          <TeamCard
            position="CG"
            teamType="Proam"
            team={props.cg}
            styles={{width: '50%', float: 'left'}}
          />

          <TeamCard
            position="CO"
            teamType="Proam"
            team={props.co}
            styles={{width: '50%', float: 'right'}}
          />
        </Card>
      </div>
    </div>
  );
});

SortedRoom.propTypes = {
  judges: PropTypes.array.isRequired,
  room: PropTypes.string.isRequired,
  co: PropTypes.object.isRequired,
  cg: PropTypes.object.isRequired,
  og: PropTypes.object.isRequired,
  oo: PropTypes.object.isRequired,
  skill_level: PropTypes.string.isRequired,
};

export default SortedRoom;
