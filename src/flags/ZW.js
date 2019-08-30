import React from "react";
import PropTypes from "prop-types";

const ZW = props => {
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
          <stop stopColor="#369D0C" offset="0%" />
          <stop stopColor="#319209" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c">
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="d">
          <stop stopColor="#FFD40E" offset="0%" />
          <stop stopColor="#FFD201" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="e">
          <stop stopColor="#F12F1F" offset="0%" />
          <stop stopColor="#DE2010" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#a)" d="M0 0h21v15H0z" />
        <path
          fill="url(#b)"
          d="M0 0h21v2H0zM0 13h21v2H0zM0 4h21v2H0zM0 9h21v2H0z"
        />
        <path fill="url(#c)" d="M0 6h21v3H0z" />
        <path fill="url(#d)" d="M0 2h21v2H0zM0 11h21v2H0z" />
        <path fill="url(#c)" fillRule="nonzero" d="M-1 15V0h1l10 7.5L0 15z" />
        <path
          fill="url(#a)"
          fillRule="nonzero"
          d="M0 13.75L8.333 7.5 0 1.25z"
        />
        <path
          fill="url(#e)"
          d="M3 8.475L1.53 9.523 2.074 7.8.623 6.727l1.804-.016L3 5l.573 1.711 1.805.016-1.45 1.074.541 1.722z"
        />
      </g>
    </svg>
  );
};

ZW.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ZW.defaultProps = {
  size: 15,
  width: 21,
  height: 15,
};

export default ZW;
