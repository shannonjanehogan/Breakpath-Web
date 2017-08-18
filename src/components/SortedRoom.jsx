import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import TeamCard from './TeamCard';

const SortedRoom = (() => {
  return (
    <div style={{margin: 'auto', width: '100%'}}>
      <div style={{margin: 'auto', width: '70%'}}>
        <h2 style={{textAlign: 'center'}}> Sorted Rooms </h2>
        <Card>
          <CardTitle title="BUCH B302" subtitle="Proam" style={{margin: 'auto'}} />
          <CardText style={{paddingTop: 0}}>
            <h4> Judges </h4>
            <Chip>
              <Avatar size={32}>Pro </Avatar>
              Dumbledore
            </Chip>
            <Chip>
              <Avatar size={32}>Nov </Avatar>
              Ron
            </Chip>
          </CardText>

          <TeamCard
            position="OG"
            teamType="Proam"
            debaterOneSkillLevel="Pro"
            debaterOneName="Rob"
            debaterTwoSkillLevel="Nov"
            debaterTwoName="Lupin"
            styles={{width: '50%'}}
          />

          <TeamCard
            position="OO"
            teamType="Proam"
            debaterOneSkillLevel="Nov"
            debaterOneName="Snape"
            debaterTwoSkillLevel="Pro"
            debaterTwoName="Harry"
            styles={{width: '50%', float: 'right', marginTop: -190}}
          />

          <TeamCard
            position="CG"
            teamType="Proam"
            debaterOneSkillLevel="Nov"
            debaterOneName="Fred"
            debaterTwoSkillLevel="Pro"
            debaterTwoName="George"
            styles={{width: '50%', float: 'left'}}
          />

          <TeamCard
            position="CO"
            teamType="Proam"
            debaterOneSkillLevel="Nov"
            debaterOneName="Lily"
            debaterTwoSkillLevel="Pro"
            debaterTwoName="Hermione"
            styles={{width: '50%', float: 'right'}}
          />

        </Card>
      </div>
    </div>
  );
});

SortedRoom.propTypes = {
  route: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default SortedRoom;
