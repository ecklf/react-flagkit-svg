import React from "react";
import PropTypes from "prop-types";

const ST = props => {
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
          <stop stopColor="#2ACB41" offset="0%" />
          <stop stopColor="#21AC35" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c">
          <stop stopColor="#FDD043" offset="0%" />
          <stop stopColor="#FFCD2F" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="d">
          <stop stopColor="#E71E43" offset="0%" />
          <stop stopColor="#D01739" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="e">
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
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
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ST.defaultProps = {
  size: 15,
  width: 21,
  height: 15,
};

export default ST;
