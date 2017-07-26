import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';

class IndexSortedRooms extends Component {
  constructor(props){
    super(props);
   }

  render() {
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

            <Card style={{width: '50%'}}>
              <CardTitle title="OG" subtitle="Proam" />
              <CardText>
                <Chip>
                  <Avatar size={32}>Pro </Avatar>
                  Rob
                </Chip>
                <Chip>
                  <Avatar size={32}>Nov </Avatar>
                  Lupin
                </Chip>
              </CardText>
            </Card>

            <Card style={{width: '50%', float: 'right', marginTop: -190}}>
              <CardTitle title="OO" subtitle="Proam" />
              <CardText>
                <Chip>
                  <Avatar size={32}>Nov </Avatar>
                  Snape
                </Chip>
                <Chip>
                  <Avatar size={32}>Pro </Avatar>
                  Harry
                </Chip>
              </CardText>
            </Card>

            <Card style={{width: '50%', float: 'left'}}>
              <CardTitle title="CG" subtitle="Proam" />
              <CardText>
                <Chip>
                  <Avatar size={32}>Nov </Avatar>
                  Fred
                </Chip>
                <Chip>
                  <Avatar size={32}>Pro </Avatar>
                  George
                </Chip>
              </CardText>
            </Card>

            <Card style={{width: '50%', float: 'right'}}>
              <CardTitle title="CO" subtitle="Proam" />
              <CardText>
                <Chip>
                  <Avatar size={32}>Nov </Avatar>
                  Hermione
                </Chip>
                <Chip>
                  <Avatar size={32}>Pro </Avatar>
                  Lily
                </Chip>
              </CardText>
            </Card>

          </Card>
        </div>
      </div>
    );
  }
}

export default IndexSortedRooms;
