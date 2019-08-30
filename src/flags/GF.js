import React from "react";
import PropTypes from "prop-types";

const GF = props => {
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
          <stop stopColor="#2DA446" offset="0%" />
          <stop stopColor="#218736" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c">
          <stop stopColor="#FFE24A" offset="0%" />
          <stop stopColor="#FCDC34" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="d">
          <stop stopColor="#E7242C" offset="0%" />
          <stop stopColor="#D61C24" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#a)" d="M0 0h21v15H0z" />
        <path fill="url(#b)" d="M0 0h21v15H0z" />
        <path fill="url(#c)" d="M0 0l21 15H0z" />
        <path
          fill="url(#d)"
          d="M10.5 9.073l-1.837 1.33.697-2.158L7.528 6.91l2.268-.004.704-2.155.704 2.155 2.268.004-1.832 1.336.697 2.158z"
        />
      </g>
    </svg>
  );
};

GF.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

GF.defaultProps = {
  size: 15,
  width: 21,
  height: 15,
};

export default GF;
