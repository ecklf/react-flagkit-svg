import React from "react";
import PropTypes from "prop-types";

const MC = props => {
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
          <stop stop-color="#EA233B" offset="0%" />
          <stop stop-color="#CC162C" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fill-rule="evenodd">
        <path fill="url(#a)" d="M0 0h21v15H0z" />
        <path fill="url(#b)" d="M0 0h21v8H0z" />
        <path fill="url(#a)" d="M0 8h21v7H0z" />
      </g>
    </svg>
  );
};

MC.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MC.defaultProps = {
  width: "21",
  height: "15",
};

export default MC;
