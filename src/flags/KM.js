import React from "react";
import PropTypes from "prop-types";

const KM = props => {
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
          <stop stopColor="#FFCB49" offset="0%" />
          <stop stopColor="#FFC638" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c">
          <stop stopColor="#DC1D34" offset="0%" />
          <stop stopColor="#CC162C" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="d">
          <stop stopColor="#4985D4" offset="0%" />
          <stop stopColor="#3D77C2" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="e">
          <stop stopColor="#4BA343" offset="0%" />
          <stop stopColor="#408D39" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#a)" d="M0 0h21v15H0z" />
        <path fill="url(#b)" d="M0 0h21v4H0z" />
        <path fill="url(#c)" d="M0 7h21v4H0z" />
        <path fill="url(#d)" d="M0 11h21v4H0z" />
        <path fill="url(#a)" d="M0 4h21v3H0z" />
        <path fill="url(#e)" d="M0 15l10-7.5L0 0z" />
        <path
          d="M4.75 4.595a3 3 0 100 5.811 3.001 3.001 0 010-5.811zM5.5 6a.5.5 0 110-1 .5.5 0 010 1zm0 2a.5.5 0 110-1 .5.5 0 010 1zm0 2a.5.5 0 110-1 .5.5 0 010 1z"
          fill="url(#a)"
        />
      </g>
    </svg>
  );
};

KM.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

KM.defaultProps = {
  size: 15,
  width: 21,
  height: 15,
};

export default KM;
