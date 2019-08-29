import React from "react";
import PropTypes from "prop-types";

const CF = props => {
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
          <stop stop-color="#083D96" offset="0%" />
          <stop stop-color="#053380" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c">
          <stop stop-color="#37AE39" offset="0%" />
          <stop stop-color="#2E9630" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="d">
          <stop stop-color="#FFD13F" offset="0%" />
          <stop stop-color="#FFCD2F" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="e">
          <stop stop-color="#E42346" offset="0%" />
          <stop stop-color="#D01739" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="f">
          <stop stop-color="#FFD03B" offset="0%" />
          <stop stop-color="#FFCD2F" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fill-rule="evenodd">
        <path fill="url(#a)" d="M0 0h21v15H0z" />
        <path fill="url(#b)" d="M0 0h21v4H0z" />
        <path fill="url(#c)" d="M0 7h21v4H0z" />
        <path fill="url(#d)" d="M0 11h21v4H0z" />
        <path fill="url(#a)" d="M0 4h21v3H0z" />
        <path fill="url(#e)" d="M8 0h5v15H8z" />
        <path
          fill="url(#f)"
          d="M3.5 2.585l-.882.629.326-1.033-.87-.645 1.082-.01L3.5.5l.344 1.027 1.083.01-.87.644.325 1.033z"
        />
      </g>
    </svg>
  );
};

CF.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CF.propTypes = {
  width: "21",
  height: "15",
};

export default CF;
