import React from "react";
import PropTypes from "prop-types";

const GW = props => {
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
          <stop stop-color="#1AB558" offset="0%" />
          <stop stop-color="#169E4D" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c">
          <stop stop-color="#FFD952" offset="0%" />
          <stop stop-color="#FCD036" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="d">
          <stop stop-color="#E72B42" offset="0%" />
          <stop stop-color="#CC162C" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="e">
          <stop stop-color="#262626" offset="0%" />
          <stop stop-color="#0D0D0D" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fill-rule="evenodd">
        <path fill="url(#a)" d="M0 0h21v15H0z" />
        <path fill="url(#b)" d="M0 7h21v8H0z" />
        <path fill="url(#c)" d="M0 0h21v7H0z" />
        <path fill="url(#d)" d="M0 0h8v15H0z" />
        <path
          fill="url(#e)"
          d="M4 8.459L2.53 9.523l.558-1.727-1.466-1.069 1.814-.003L4 5l.564 1.724 1.814.003-1.466 1.07.557 1.726z"
        />
      </g>
    </svg>
  );
};

GW.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

GW.defaultProps = {
  width: "21",
  height: "15",
};

export default GW;
