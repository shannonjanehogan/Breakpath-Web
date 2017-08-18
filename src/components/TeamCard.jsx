import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';

const TeamCard = ((props) => {
  return (
    <Card style={props.styles}>
      <CardTitle title={props.position} subtitle={props.teamType} />
      <CardText>
        <Chip>
          <Avatar size={32}> {props.debaterOneSkillLevel} </Avatar>
          {props.debaterOneName}
        </Chip>
        <Chip>
          <Avatar size={32}> {props.debaterTwoSkillLevel} </Avatar>
          {props.debaterTwoName}
        </Chip>
      </CardText>
    </Card>
  );
});

TeamCard.propTypes = {
  style: PropTypes.shape.isRequired,
  position: PropTypes.string.isRequired,
  teamType: PropTypes.string.isRequired,
  debaterOneSkillLevel: PropTypes.string.isRequired,
  debaterOneName: PropTypes.string.isRequired,
  debaterTwoSkillLevel: PropTypes.string.isRequired,
  debaterTwoName: PropTypes.string.isRequired,
};

export default TeamCard;
