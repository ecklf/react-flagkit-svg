import React from "react";
import PropTypes from "prop-types";

const CC = props => {
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
          <stop stop-color="#229716" offset="0%" />
          <stop stop-color="#1C7E12" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c">
          <stop stop-color="#FFE244" offset="0%" />
          <stop stop-color="#FFDF32" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fill-rule="evenodd">
        <path fill="url(#a)" d="M0 0h21v15H0z" />
        <path fill="url(#b)" d="M0 0h21v15H0z" />
        <path
          d="M4 6a2 2 0 110-4 2 2 0 010 4zm0-2c.208 0-.16 1.054 0 1 .265-.09 1-1.328 1-1.5 0-.276-.448-.5-1-.5s-1 .224-1 .5.448.5 1 .5zm12 9l-.707.207.207-.707-.207-.707L16 12l.707-.207-.207.707.207.707zm0-9.5l-.707.207L15.5 3l-.207-.707L16 2.5l.707-.207L16.5 3l.207.707zm3 3l-.707.207L18.5 6l-.207-.707L19 5.5l.707-.207L19.5 6l.207.707zm-5 1l-.707.207L13.5 7l-.207-.707L14 6.5l.707-.207L14.5 7l.207.707zm3.5 1.25l-.354.104.104-.354-.104-.354.354.104.354-.104-.104.354.104.354zm-5.439-3.203a2.5 2.5 0 100 3.905 2.083 2.083 0 110-3.905z"
          fill="url(#c)"
        />
      </g>
    </svg>
  );
};

CC.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CC.propTypes = {
  width: "21",
  height: "15",
};

export default CC;
