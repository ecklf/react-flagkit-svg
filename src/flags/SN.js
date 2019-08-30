import React from "react";
import PropTypes from "prop-types";

const SN = props => {
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
          <stop stopColor="#F13642" offset="0%" />
          <stop stopColor="#E1202C" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c">
          <stop stopColor="#17A052" offset="0%" />
          <stop stopColor="#108442" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="d">
          <stop stopColor="#FFF166" offset="0%" />
          <stop stopColor="#FDEE54" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#a)" d="M0 0h21v15H0z" />
        <path fill="url(#b)" d="M10 0h11v15H10z" />
        <path fill="url(#c)" d="M0 0h7v15H0z" />
        <path fill="url(#d)" d="M7 0h7v15H7z" />
        <path
          fill="url(#c)"
          d="M10.5 8.525l-1.47.998.495-1.706-1.403-1.09 1.776-.056L10.5 5l.602 1.67 1.776.057-1.403 1.09.494 1.706z"
        />
      </g>
    </svg>
  );
};

SN.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SN.defaultProps = {
  size: 15,
  width: 21,
  height: 15,
};

export default SN;
