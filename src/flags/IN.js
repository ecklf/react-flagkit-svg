import React from "react";
import PropTypes from "prop-types";

const IN = props => {
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
          <stop stop-color="#FFA44A" offset="0%" />
          <stop stop-color="#FF9934" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c">
          <stop stop-color="#1A9F0B" offset="0%" />
          <stop stop-color="#138806" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fill-rule="evenodd">
        <path fill="url(#a)" d="M0 0h21v15H0z" />
        <path fill="url(#b)" d="M0 0h21v5H0z" />
        <path fill="url(#c)" d="M0 10h21v5H0z" />
        <path fill="url(#a)" d="M0 5h21v5H0z" />
        <circle fill-opacity=".15" fill="#181A93" cx="10.5" cy="7.5" r="1.5" />
        <path
          d="M10.5 9.5a2 2 0 110-4 2 2 0 010 4zm0-.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
          fill="#181A93"
          fill-rule="nonzero"
        />
        <circle fill="#181A93" cx="10.5" cy="7.5" r="1" />
      </g>
    </svg>
  );
};

IN.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

IN.propTypes = {
  width: "21",
  height: "15",
};

export default IN;
