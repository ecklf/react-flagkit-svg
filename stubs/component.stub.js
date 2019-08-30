import React from "react";
import PropTypes from "prop-types";

const FLAGNAME = props => {
  let { size, width, height, ...otherProps } = props;

  if (size !== height) {
    width = width * (size / height);
    height = height * (size / height);
  }

  return FLAGSVG;
};

FLAGNAME.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FLAGNAME.defaultProps = {
  size: 15,
  width: 21,
  height: 15
};

export default FLAGNAME;
