import React from "react";
import PropTypes from "prop-types";

const AG = props => {
  const { width, height, ...otherProps } = props;
  return (
    <svg
      width={width}
      height={height}
      {...otherProps}
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a">
          <stop stop-color="#FFF" offset="0%" />
          <stop stop-color="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b">
          <stop stop-color="#E2243B" offset="0%" />
          <stop stop-color="#CC162C" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="d">
          <stop stop-color="#262626" offset="0%" />
          <stop stop-color="#0D0D0D" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="e">
          <stop stop-color="#FFCF3C" offset="0%" />
          <stop stop-color="#FECB2F" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="g">
          <stop stop-color="#1984D8" offset="0%" />
          <stop stop-color="#1175C4" offset="100%" />
        </linearGradient>
        <path id="c" d="M0 0h21L10.5 15z" />
      </defs>
      <g fill="none" fill-rule="evenodd">
        <path fill="url(#a)" d="M0 0h21v15H0z" />
        <path
          d="M8.5 7a2 2 0 00.998 1.731m2.078-.045c.556-.355.924-.978.924-1.686"
          opacity=".75"
        />
        <ellipse
          fill-opacity=".5"
          fill="#FFF"
          cx="10.5"
          cy="6.5"
          rx="1"
          ry="1.5"
        />
        <path fill="url(#b)" d="M0 0h21v15H0z" />
        <mask id="f" fill="#fff">
          <use xlinkHref="#c" />
        </mask>
        <use fill="url(#d)" xlinkHref="#c" />
        <path
          fill="url(#e)"
          mask="url(#f)"
          d="M10.5 8.25l-1.722 1.907.131-2.566-2.566.131L8.25 6 6 4l2.909.5-.409-3 2 2.5 2-2.5-.409 3L15 4l-2.25 2 1.907 1.722-2.566-.131.131 2.566z"
        />
        <path fill="url(#g)" mask="url(#f)" d="M0 6h21v4H0z" />
        <path fill="url(#a)" mask="url(#f)" d="M0 10h21v5H0z" />
      </g>
    </svg>
  );
};

AG.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

AG.propTypes = {
  width: "21",
  height: "15",
};

export default AG;
