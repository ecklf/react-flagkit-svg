import React from "react";
import PropTypes from "prop-types";

const HN = props => {
  const { width, height, ...otherProps } = props;
  return (
    <svg
      width={width}
      height={height}
      {...otherProps}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a">
          <stop stop-color="#FFF" offset="0%" />
          <stop stop-color="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b">
          <stop stop-color="#0884E6" offset="0%" />
          <stop stop-color="#0074D0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c">
          <stop stop-color="#0E88E9" offset="0%" />
          <stop stop-color="#0074D0" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fill-rule="evenodd">
        <path fill="url(#a)" d="M0 0h21v15H0z" />
        <path fill="url(#b)" d="M0 0h21v5H0zm0 10h21v5H0z" />
        <path fill="url(#a)" d="M0 5h21v5H0z" />
        <path
          fill="url(#c)"
          d="M10.5 8l-.707.207L10 7.5l-.207-.707L10.5 7l.707-.207L11 7.5l.207.707zm4-1l-.707.207L14 6.5l-.207-.707L14.5 6l.707-.207L15 6.5l.207.707zm0 2l-.707.207L14 8.5l-.207-.707L14.5 8l.707-.207L15 8.5l.207.707zm-8 0l-.707.207L6 8.5l-.207-.707L6.5 8l.707-.207L7 8.5l.207.707zm0-2l-.707.207L6 6.5l-.207-.707L6.5 6l.707-.207L7 6.5l.207.707z"
        />
      </g>
    </svg>
  );
};

HN.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

HN.propTypes = {
  width: "21",
  height: "15",
};

export default HN;
