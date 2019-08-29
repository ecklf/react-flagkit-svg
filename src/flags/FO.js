import React from "react";
import PropTypes from "prop-types";

const FO = props => {
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
          <stop stop-color="#1879D6" offset="0%" />
          <stop stop-color="#0F67BB" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c">
          <stop stop-color="#F13E4F" offset="0%" />
          <stop stop-color="#EB2D3F" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fill-rule="evenodd">
        <path fill="url(#a)" d="M0 0h21v15H0z" />
        <path fill="url(#b)" d="M0 9h6v6h3V9h12V6H9V0H6v6H0z" />
        <path fill="url(#c)" d="M0 8h7v7h1V8h13V7H8V0H7v7H0z" />
      </g>
    </svg>
  );
};

FO.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FO.defaultProps = {
  width: "21",
  height: "15",
};

export default FO;
