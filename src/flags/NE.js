import React from "react";
import PropTypes from "prop-types";

const NE = props => {
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
          <stop stopColor="#F0642F" offset="0%" />
          <stop stopColor="#DF531D" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c">
          <stop stopColor="#2DCC45" offset="0%" />
          <stop stopColor="#1FAF35" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="d">
          <stop stopColor="#E85C27" offset="0%" />
          <stop stopColor="#DF531D" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#a)" d="M0 0h21v15H0z" />
        <path fill="url(#b)" d="M0 0h21v5H0z" />
        <path fill="url(#c)" d="M0 10h21v5H0z" />
        <path fill="url(#a)" d="M0 5h21v5H0z" />
        <circle fill="url(#d)" cx="10.5" cy="7.5" r="2" />
      </g>
    </svg>
  );
};

NE.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

NE.defaultProps = {
  size: 15,
  width: 21,
  height: 15,
};

export default NE;
