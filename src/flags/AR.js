import React from "react";
import PropTypes from "prop-types";

const AR = props => {
  const { width, height, ...otherProps } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 21 15"
      {...otherProps}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a">
          <stop stop-color="#FFF" offset="0%" />
          <stop stop-color="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b">
          <stop stop-color="#88BBE8" offset="0%" />
          <stop stop-color="#76ADDD" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fill-rule="evenodd">
        <path fill="url(#a)" d="M0 0h21v15H0z" />
        <path fill="url(#b)" d="M0 0h21v5H0zM0 10h21v5H0z" />
        <path fill="url(#a)" d="M0 5h21v5H0z" />
        <path
          d="M10.5 9.5a2 2 0 110-4 2 2 0 010 4z"
          fill="#DB7A2C"
          fill-rule="nonzero"
        />
        <circle fill="#F4B32E" cx="10.5" cy="7.5" r="1.5" />
      </g>
    </svg>
  );
};

AR.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

AR.defaultProps = {
  width: "21",
  height: "15",
};

export default AR;
