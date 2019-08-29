import React from "react";
import PropTypes from "prop-types";

const CU = props => {
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
          <stop stop-color="#0B389F" offset="0%" />
          <stop stop-color="#052E8D" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c">
          <stop stop-color="#E12A43" offset="0%" />
          <stop stop-color="#CD1931" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fill-rule="evenodd">
        <path fill="url(#a)" d="M0 0h21v15H0z" />
        <path fill="url(#b)" d="M0 0h21v3H0zM0 6h21v3H0z" />
        <path fill="url(#a)" d="M0 3h21v3H0z" />
        <path fill="url(#b)" d="M0 12h21v3H0z" />
        <path fill="url(#a)" d="M0 9h21v3H0z" />
        <path fill="url(#c)" d="M0 0l10 7.5L0 15z" />
        <path
          fill="url(#a)"
          d="M3.5 8.267l-1.176.851.447-1.381-1.173-.855 1.451-.003L3.5 5.5l.45 1.38 1.452.002-1.173.855.447 1.381z"
        />
      </g>
    </svg>
  );
};

CU.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CU.defaultProps = {
  width: "21",
  height: "15",
};

export default CU;
