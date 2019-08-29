import React from "react";
import PropTypes from "prop-types";

const TT = props => {
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
          <stop stop-color="#ED233C" offset="0%" />
          <stop stop-color="#CC162C" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c">
          <stop stop-color="#262626" offset="0%" />
          <stop stop-color="#0D0D0D" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fill-rule="evenodd">
        <path fill="url(#a)" d="M0 0h21v15H0z" />
        <path fill="url(#b)" d="M-.004.005h21v15h-21z" />
        <path
          fill="url(#a)"
          transform="matrix(-1 0 0 1 21.5 0)"
          d="M23-1l-7.144-3.06-15.1 17.995L-1.5 16l7.653 3.07L20.977 1.403z"
        />
        <path
          fill="url(#c)"
          transform="matrix(-1 0 0 1 20.991 0)"
          d="M3.09 20.22L21.731-1.997l-3.83-3.214L-.74 17.005l3.83 3.214z"
        />
      </g>
    </svg>
  );
};

TT.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TT.propTypes = {
  width: "21",
  height: "15",
};

export default TT;
