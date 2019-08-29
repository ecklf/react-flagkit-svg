import React from "react";
import PropTypes from "prop-types";

const ST = props => {
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
          <stop stop-color="#2ACB41" offset="0%" />
          <stop stop-color="#21AC35" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c">
          <stop stop-color="#FDD043" offset="0%" />
          <stop stop-color="#FFCD2F" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="d">
          <stop stop-color="#E71E43" offset="0%" />
          <stop stop-color="#D01739" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="e">
          <stop stop-color="#262626" offset="0%" />
          <stop stop-color="#0D0D0D" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fill-rule="evenodd">
        <path fill="url(#a)" d="M0 0h21v15H0z" />
        <path fill="url(#b)" d="M0 10h21v5H0zM0 0h21v5H0z" />
        <path fill="url(#c)" d="M0 5h21v5H0z" />
        <path fill="url(#d)" d="M0 0l8 7.5L0 15z" />
        <path
          fill="url(#e)"
          d="M11 8.32l-1.176.798.396-1.365-1.122-.871 1.42-.045L11 5.5l.482 1.337 1.42.045-1.122.871.396 1.365zM16 8.32l-1.176.798.396-1.365-1.122-.871 1.42-.045L16 5.5l.482 1.337 1.42.045-1.122.871.396 1.365z"
        />
      </g>
    </svg>
  );
};

ST.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ST.defaultProps = {
  width: "21",
  height: "15",
};

export default ST;
