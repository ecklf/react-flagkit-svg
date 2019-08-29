import React from "react";
import PropTypes from "prop-types";

const MT = props => {
  const { width, height, ...otherProps } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 21 15"
      {...otherProps}
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a">
          <stop stop-color="#FFF" offset="0%" />
          <stop stop-color="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b">
          <stop stop-color="#DE233C" offset="0%" />
          <stop stop-color="#CD1931" offset="100%" />
        </linearGradient>
        <path d="M4 3V2H3v1H2v1h1v1h1V4h1V3H4z" id="c" />
      </defs>
      <g fill="none" fill-rule="evenodd">
        <path fill="url(#a)" d="M0 0h21v15H0z" />
        <path fill="url(#b)" d="M11 0h10v15H11z" />
        <path fill="url(#a)" d="M0 0h11v15H0z" />
        <use fill="#CCCCCD" xlinkHref="#c" />
        <path
          stroke-opacity=".66"
          stroke="#7B716A"
          stroke-width=".5"
          d="M4.25 2.75h1v1.5h-1v1h-1.5v-1h-1v-1.5h1v-1h1.5v1z"
        />
        <circle fill="#7B716A" cx="3.5" cy="3.5" r="1" />
      </g>
    </svg>
  );
};

MT.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MT.defaultProps = {
  width: "21",
  height: "15",
};

export default MT;
