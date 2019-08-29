import React from "react";
import PropTypes from "prop-types";

const MR = props => {
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
          <stop stop-color="#108B4D" offset="0%" />
          <stop stop-color="#0A6135" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c">
          <stop stop-color="#FFC941" offset="0%" />
          <stop stop-color="#FFC42E" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fill-rule="evenodd">
        <path fill="url(#a)" d="M0 0h21v15H0z" />
        <path fill="url(#b)" d="M0 0h21v15H0z" />
        <path
          d="M14.86 5.8a4.5 4.5 0 11-8.89 0 4.501 4.501 0 008.89 0zm-4.36.623l-1.236.881.456-1.448-1.22-.903 1.518-.014L10.5 3.5l.482 1.44 1.518.013-1.22.903.456 1.448-1.236-.88z"
          fill="url(#c)"
        />
      </g>
    </svg>
  );
};

MR.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MR.defaultProps = {
  width: "21",
  height: "15",
};

export default MR;
