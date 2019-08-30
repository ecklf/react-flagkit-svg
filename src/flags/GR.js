import React from "react";
import PropTypes from "prop-types";

const GR = props => {
  let { size, width, height, ...otherProps } = props;

  if (size !== height) {
    width = width * (size / height);
    height = height * (size / height);
  }

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
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b">
          <stop stopColor="#1C6DC1" offset="0%" />
          <stop stopColor="#1660AD" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#a)" d="M0 0h21v15H0z" />
        <path
          d="M0 0h4v4H0V0zm6 0h4v4H6V0zm4 0h11v2H10V0zm0 4h11v2H10V4zm0 4h11v2H10V8zM0 12h21v2H0v-2zm6-6h4v4H6V6zM0 6h4v4H0V6z"
          fill="url(#b)"
        />
      </g>
    </svg>
  );
};

GR.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

GR.defaultProps = {
  size: 15,
  width: 21,
  height: 15,
};

export default GR;
