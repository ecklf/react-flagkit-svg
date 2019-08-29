import React from "react";
import PropTypes from "prop-types";

const CG = props => {
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
          <stop stop-color="#F33630" offset="0%" />
          <stop stop-color="#DC241E" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c">
          <stop stop-color="#009643" offset="0%" />
          <stop stop-color="#09C15B" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="d">
          <stop stop-color="#FCDF4A" offset="0%" />
          <stop stop-color="#FCE154" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fill-rule="evenodd">
        <path fill="url(#a)" d="M0 0h21v15H0z" />
        <path
          fill="url(#b)"
          d="M6.062 19.017l15-14h1v15h-16z"
          transform="translate(-1.06 -5.02)"
        />
        <path
          fill="url(#c)"
          transform="rotate(180 8.532 10.007)"
          d="M1.062 19.017l15-14h1v15h-16z"
        />
        <path
          fill="url(#d)"
          transform="rotate(134 12.406 9.432)"
          d="M-2.63 9.667h29v5h-29z"
        />
      </g>
    </svg>
  );
};

CG.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CG.defaultProps = {
  width: "21",
  height: "15",
};

export default CG;
