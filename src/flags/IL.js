import React from "react";
import PropTypes from "prop-types";

const IL = props => {
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
          <stop stop-color="#0E46D4" offset="0%" />
          <stop stop-color="#0538B9" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fill-rule="evenodd">
        <path fill="url(#a)" d="M0 0h21v15H0z" />
        <path fill="url(#b)" d="M0 0h21v3H0zm0 12h21v3H0z" />
        <path fill="url(#a)" d="M0 3h21v9H0z" />
        <path
          d="M7.575 9.25L10.5 3.985l2.925 5.265h-5.85z"
          stroke="#093EC5"
          stroke-width=".5"
        />
        <path
          d="M7.575 5.75l2.925 5.265 2.925-5.265h-5.85z"
          stroke="#093EC5"
          stroke-width=".5"
        />
      </g>
    </svg>
  );
};

IL.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

IL.propTypes = {
  width: "21",
  height: "15",
};

export default IL;
