import React from "react";
import PropTypes from "prop-types";

const JO = props => {
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
          <stop stop-color="#199E56" offset="0%" />
          <stop stop-color="#0F7A40" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c">
          <stop stop-color="#262626" offset="0%" />
          <stop stop-color="#0D0D0D" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="d">
          <stop stop-color="#E6223A" offset="0%" />
          <stop stop-color="#CC162C" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fill-rule="evenodd">
        <path fill="url(#a)" d="M0 0h21v15H0z" />
        <path fill="url(#b)" d="M0 10h21v5H0z" />
        <path fill="url(#c)" d="M0 0h21v5H0z" />
        <path fill="url(#a)" d="M0 5h21v5H0z" />
        <path fill="url(#d)" d="M0 0l10 7.5L0 15z" />
        <path
          fill="url(#a)"
          d="M3.5 8.25l-.65.601.064-.883-.876-.134.73-.5-.44-.77.847.26L3.5 6l.325.824.848-.26-.442.77.731.5-.876.134.065.883z"
        />
      </g>
    </svg>
  );
};

JO.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

JO.propTypes = {
  width: "21",
  height: "15",
};

export default JO;
