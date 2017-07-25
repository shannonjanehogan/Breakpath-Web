import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import ActionMenu from 'material-ui/svg-icons/navigation/menu';

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.props.handleChangeRequestNavDrawer();
  }

  render() {
    const { styles, handleChangeRequestNavDrawer } = this.props;
    const style = {
      appBar: {
        position: 'fixed',
        top: 0,
        overflow: 'hidden',
        maxHeight: 57,
        backgroundColor: '#002154',
      },
      menuButton: {
        marginLeft: 30,
      },
      iconsLeftContainer: {
        marginRight: 10,
      },
      iconsRightContainer: {
        marginLeft: 20,
      },
      button: {
        color: 'white',
      },
    };
    let leftBurger = (<div style={{ width: 20 }} />);
    leftBurger = (
      <IconButton style={style.menuButton} onClick={handleChangeRequestNavDrawer}>
        <ActionMenu />
      </IconButton>
    );
    const button = (
      <div>
        <FlatButton style={style.button} containerElement={<Link to="/login" />} label={'Login'} />
        <FlatButton style={style.button} containerElement={<Link to="/signup" />} label={'Sign Up'} />
      </div>
    );
    return (
      <AppBar
        style={{ ...styles, ...style.appBar }}
        title="BreakPath"
        titleStyle={{}}
        iconElementLeft={leftBurger}
        iconElementRight={button}
      />
    );
  }
}

Header.propTypes = {
  styles: PropTypes.object,
  handleChangeRequestNavDrawer: PropTypes.func.isRequired,
};

export default Header;
