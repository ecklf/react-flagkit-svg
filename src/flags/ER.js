import React from "react";
import PropTypes from "prop-types";

const ER = props => {
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
          <stop stop-color="#29C53F" offset="0%" />
          <stop stop-color="#21AC35" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c">
          <stop stop-color="#579DED" offset="0%" />
          <stop stop-color="#458BDB" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="d">
          <stop stop-color="#F42D56" offset="0%" />
          <stop stop-color="#E9103D" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fill-rule="evenodd">
        <path fill="url(#a)" d="M0 0h21v15H0z" />
        <path fill="url(#b)" d="M0 0h21v7.5H0z" />
        <path fill="url(#c)" d="M0 7.5h21v8H0z" />
        <path fill="url(#d)" d="M0 15l21-7.5L0 0z" />
        <path
          d="M6.5 10a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm0 1a3.5 3.5 0 110-7 3.5 3.5 0 010 7z"
          fill="#FFC63C"
          fill-rule="nonzero"
        />
        <circle fill="#FFC63C" cx="6" cy="6.5" r="1" />
        <circle fill="#FFC63C" cx="7" cy="7" r="1" />
        <circle fill="#FFC63C" cx="6.5" cy="6" r="1" />
        <circle fill="#FFC63C" cx="6" cy="7.5" r="1" />
        <circle fill="#FFC63C" cx="7" cy="8" r="1" />
        <circle fill="#FFC63C" cx="6" cy="8.5" r="1" />
        <circle fill="#FFC63C" cx="7" cy="9" r="1" />
      </g>
    </svg>
  );
};

ER.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ER.propTypes = {
  width: "21",
  height: "15",
};

export default ER;
