import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';

const TeamCard = ((props) => {
  return (
    <Card style={props.styles}>
      <CardTitle title={props.position} subtitle={props.team.debater_one.skill_level} />
      <CardText>
        <Chip>
          <Avatar size={32}> {props.team.debater_one.skill_level} </Avatar>
          {props.team.debater_one.first_name}
        </Chip>
        <Chip>
          <Avatar size={32}> {props.team.debater_one.skill_level} </Avatar>
          {props.team.debater_two.first_name}
        </Chip>
      </CardText>
    </Card>
  );
});

TeamCard.propTypes = {
  styles: PropTypes.object.isRequired,
  position: PropTypes.string.isRequired,
  team: PropTypes.object.isRequired,
};

export default TeamCard;
