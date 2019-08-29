import React from "react";
import PropTypes from "prop-types";

const TF = props => {
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
          <stop stop-color="#073AB6" offset="0%" />
          <stop stop-color="#002B93" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c">
          <stop stop-color="#F44653" offset="0%" />
          <stop stop-color="#EE2A39" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="d">
          <stop stop-color="#1035BB" offset="0%" />
          <stop stop-color="#042396" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fill-rule="evenodd">
        <path fill="url(#a)" d="M0 0h21v15H0z" />
        <path fill="url(#b)" d="M0 0h21v15H0z" />
        <path d="M0 0h9.5v7.25c0 .138-.107.25-.254.25H0V0z" fill="url(#a)" />
        <path fill="url(#c)" d="M6 0h3v7H6z" />
        <path fill="url(#d)" d="M0 0h3v7H0z" />
        <path fill="url(#a)" d="M3 0h3v7H3z" />
        <path
          d="M13 6h5l-.5 1H16v.5h1l-.5 1H16V10h-1V7h-1.5L13 6zm4 2.5l1 1.5h-2l1-1.5zm-3 0l1 1.5h-2l1-1.5zm1.5 3l-1-1.5h2l-1 1.5zm3-3.5a.5.5 0 110-1 .5.5 0 010 1zm-6 0a.5.5 0 110-1 .5.5 0 010 1zm1 4a.5.5 0 110-1 .5.5 0 010 1zm4 0a.5.5 0 110-1 .5.5 0 010 1zm-2 1a.5.5 0 110-1 .5.5 0 010 1z"
          fill="#FFF"
        />
      </g>
    </svg>
  );
};

TF.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TF.propTypes = {
  width: "21",
  height: "15",
};

export default TF;
