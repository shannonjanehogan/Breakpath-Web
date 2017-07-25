import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';
import SocialIcon from 'material-ui/svg-icons/social/group';
import { spacing, typography } from 'material-ui/styles';

class LeftDrawer extends Component {
  render() {
    const { drawerOpen } = this.props;
    const styles = {
      logo: {
        cursor: 'pointer',
        fontSize: 22,
        color: typography.textFullWhite,
        lineHeight: `${spacing.desktopKeylineIncrement}px`,
        fontWeight: typography.fontWeightLight,
        backgroundColor: '#002154',
        paddingLeft: 40,
        height: 56,
      },
      welcome: {
        div: {
          padding: '15px 15px 20px 0',
          height: 45,
        },
        span: {
          paddingTop: 12,
          paddingLeft: 40,
          display: 'block',
          fontWeight: 300,
        },
      },
    };

    return (
      <Drawer
        docked
        open={drawerOpen}
        style={{ width: 230 }}
      >
        <div style={styles.logo}>
          UBCDS
        </div>
        <div style={styles.welcome.div}>
          <span style={styles.welcome.span}>
            Welcome back!
          </span>
        </div>
        <div>
          <MenuItem
            key={0}
            style={{fontSize: 14}}
            primaryText={'Sign up to Debate'}
            leftIcon={(<SocialIcon/>)}
            containerElement={<Link to={'/debates/new'} />}
          />
        </div>
      </Drawer>
    );
  }
}

LeftDrawer.propTypes = {
  drawerOpen: PropTypes.bool,
};

export default LeftDrawer;
