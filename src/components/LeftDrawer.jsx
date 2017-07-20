import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Drawer from 'material-ui/Drawer';
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
          color: 'white',
          fontWeight: 300,
          textShadow: '1px 1px #444',
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
      </Drawer>
    );
  }
}

LeftDrawer.propTypes = {
  drawerOpen: PropTypes.bool,
};

export default LeftDrawer;