import React from "react";
import PropTypes from "prop-types";

const EC = props => {
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
          <stop stopColor="#0748AE" offset="0%" />
          <stop stopColor="#003993" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c">
          <stop stopColor="#DE2035" offset="0%" />
          <stop stopColor="#CE1126" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="d">
          <stop stopColor="#FFD935" offset="0%" />
          <stop stopColor="#FDD216" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="e">
          <stop stopColor="#FBDC44" offset="0%" />
          <stop stopColor="#FFDC32" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#a)" d="M0 0h21v15H0z" />
        <path fill="url(#b)" d="M0 7h21v4H0z" />
        <path fill="url(#c)" d="M0 11h21v4H0z" />
        <path fill="url(#d)" d="M0 0h21v7H0z" />
        <path d="M9.3 6a2 2 0 102.4 0L11 8.1h-1L9.3 6z" fill="url(#e)" />
        <path fill="#5FC0DC" d="M10.5 5.5L11 8h-1z" />
        <path
          d="M9.677 3.823a.25.25 0 00-.256-.06l-1.5.5a.25.25 0 10.158.474l1.353-.451.891.89a.25.25 0 00.354 0l.89-.89 1.354.451a.25.25 0 10.158-.474l-1.5-.5a.25.25 0 00-.256.06l-.823.823-.823-.823z"
          fill="#3F2821"
          fillRule="nonzero"
          opacity=".66"
        />
      </g>
    </svg>
  );
};

EC.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

EC.defaultProps = {
  size: 15,
  width: 21,
  height: 15,
};

export default EC;
