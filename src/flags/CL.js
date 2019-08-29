import React from "react";
import PropTypes from "prop-types";

const CL = props => {
  const { width, height, ...otherProps } = props;
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
          <stop stop-color="#FFF" offset="0%" />
          <stop stop-color="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b">
          <stop stop-color="#EA3B2E" offset="0%" />
          <stop stop-color="#D52B1E" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c">
          <stop stop-color="#0B48C2" offset="0%" />
          <stop stop-color="#0239A7" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fill-rule="evenodd">
        <path fill="url(#a)" d="M0 0h21v15H0z" />
        <path fill="url(#b)" d="M0 7h21v8H0z" />
        <path fill="url(#a)" d="M0 0h21v7H0z" />
        <path fill="url(#c)" d="M0 0h7v7H0z" />
        <path
          fill="url(#a)"
          d="M3.5 4.28l-1.176.838.434-1.377-1.16-.859 1.444-.013L3.5 1.5l.458 1.369 1.444.013-1.16.859.434 1.377z"
        />
      </g>
    </svg>
  );
};

CL.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CL.defaultProps = {
  width: "21",
  height: "15",
};

export default CL;
