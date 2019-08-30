import React from "react";
import PropTypes from "prop-types";

const UM = props => {
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
          <stop stopColor="#D02F44" offset="0%" />
          <stop stopColor="#B12537" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c">
          <stop stopColor="#46467F" offset="0%" />
          <stop stopColor="#3C3C6D" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#a)" d="M0 0h21v15H0z" />
        <path
          d="M0 0h21v1H0V0zm0 2h21v1H0V2zm0 2h21v1H0V4zm0 2h21v1H0V6zm0 2h21v1H0V8zm0 2h21v1H0v-1zm0 2h21v1H0v-1zm0 2h21v1H0v-1z"
          fill="url(#b)"
        />
        <path fill="url(#c)" d="M0 0h9v7H0z" />
        <path
          d="M1.5 2a.5.5 0 110-1 .5.5 0 010 1zm2 0a.5.5 0 110-1 .5.5 0 010 1zm2 0a.5.5 0 110-1 .5.5 0 010 1zm2 0a.5.5 0 110-1 .5.5 0 010 1zm-5 1a.5.5 0 110-1 .5.5 0 010 1zm2 0a.5.5 0 110-1 .5.5 0 010 1zm2 0a.5.5 0 110-1 .5.5 0 010 1zm1 1a.5.5 0 110-1 .5.5 0 010 1zm-2 0a.5.5 0 110-1 .5.5 0 010 1zm-2 0a.5.5 0 110-1 .5.5 0 010 1zm-2 0a.5.5 0 110-1 .5.5 0 010 1zm1 1a.5.5 0 110-1 .5.5 0 010 1zm2 0a.5.5 0 110-1 .5.5 0 010 1zm2 0a.5.5 0 110-1 .5.5 0 010 1zm1 1a.5.5 0 110-1 .5.5 0 010 1zm-2 0a.5.5 0 110-1 .5.5 0 010 1zm-2 0a.5.5 0 110-1 .5.5 0 010 1zm-2 0a.5.5 0 110-1 .5.5 0 010 1z"
          fill="url(#a)"
        />
      </g>
    </svg>
  );
};

UM.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UM.defaultProps = {
  size: 15,
  width: 21,
  height: 15,
};

export default UM;
