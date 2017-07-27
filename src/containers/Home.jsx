import React from 'react';
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card';
import logo from '../dashboard-black.svg';
import NavyThemeRaisedButton from '../components/NavyThemeRaisedButton';
import '../App.css';

const HomeContainer = () => {
  const title = (
    <div>
      Welcome to
      <img src={logo} className="App-logo" alt="logo" />
      BreakPath
    </div>
  )
  return (
    <div className="App">
      <div className="App-header">

        <Card style={{width: '50%', margin: 'auto'}}>
          <CardTitle
            title={title}
            subtitle="Software for Debaters"
            style={{margin: 'auto'}}
          />
          <CardText style={{paddingTop: 0}}>
            <div style={{margin: '20px'}}>
            Breakpath was made for debaters by debaters
            </div>
            <div style={{margin: '20px'}}>
            Sign up to debate, and view your place in the draw
            </div>
            <div style={{margin: '20px'}}>
            Plenty of new features coming soon
            </div>
            <div style={{margin: '20px'}}>
            Check out the BreakPath apps for iOS and Android
            </div>
            <div style={{margin: '20px'}}>
            Made with
            <i className="fa fa-heart" style={{padding: '5px'}} aria-hidden="true"></i>
            for the University of British Columbia Debate Society
            </div>
          </CardText>
          <CardActions>
            <NavyThemeRaisedButton
              route={'/signup'}
              label={'Sign Up'}
            />
            <NavyThemeRaisedButton
              route={'/login'}
              label={'Login'}
            />
            <NavyThemeRaisedButton
              route={'/debates/new'}
              label={'Sign Up to Debate'}
            />
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default HomeContainer;
