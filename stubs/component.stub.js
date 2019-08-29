import React from 'react';
import PropTypes from 'prop-types';

const FLAGNAME = props => {
  const {width, height, ...otherProps} = props;
  return FLAGSVG;
};

FLAGNAME.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FLAGNAME.defaultProps = {
  width: '21',
  height: '15',
};

export default FLAGNAME;
