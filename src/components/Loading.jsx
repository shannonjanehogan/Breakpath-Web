import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from 'material-ui/CircularProgress';

const Loading = ((props) => {
  return (
    <div style={{ position: 'relative' }}>
      <CircularProgress size={80} thickness={5} style={{ marginTop: '25%', marginLeft: '47%' }} />
      <div style={{ textAlign: 'center', marginTop: '25px' }}> {props.message} </div>
    </div>
  );
});

Loading.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Loading;
