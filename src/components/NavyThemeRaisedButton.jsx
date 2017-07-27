import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';

const NavyThemeRaisedButton = ((props) => {
  return (
    <RaisedButton
      backgroundColor={'#002154'}
      labelColor={'#ffffff'}
      style={{margin: '10px'}}
      containerElement={<Link to={props.route} />}
      label={props.label}
    />
  );
});

NavyThemeRaisedButton.propTypes = {
  route: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default NavyThemeRaisedButton;
