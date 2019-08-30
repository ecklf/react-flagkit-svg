import React from "react";
import PropTypes from "prop-types";

const BF = props => {
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
          <stop stopColor="#00B051" offset="0%" />
          <stop stopColor="#009F49" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c">
          <stop stopColor="#FA494B" offset="0%" />
          <stop stopColor="#F02B2D" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#a)" d="M0 0h21v15H0z" />
        <path fill="url(#b)" d="M0 8h21v7H0z" />
        <path fill="url(#c)" d="M0 0h21v8H0z" />
        <path
          fill="#FDD216"
          d="M10.5 9.17l-1.763 1.257.65-2.065-1.74-1.29 2.165-.019L10.5 5l.688 2.053 2.165.02-1.74 1.289.65 2.065z"
        />
      </g>
    </svg>
  );
};

BF.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BF.defaultProps = {
  size: 15,
  width: 21,
  height: 15,
};

export default BF;
