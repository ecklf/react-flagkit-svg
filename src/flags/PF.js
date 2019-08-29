import React from "react";
import PropTypes from "prop-types";

const PF = props => {
  const { width, height, ...otherProps } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 21 15"
      {...otherProps}
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a">
          <stop stop-color="#FFF" offset="0%" />
          <stop stop-color="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b">
          <stop stop-color="#E02639" offset="0%" />
          <stop stop-color="#CA1A2C" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c">
          <stop stop-color="#DC2235" offset="0%" />
          <stop stop-color="#CA1A2C" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="e">
          <stop stop-color="#FFA135" offset="0%" />
          <stop stop-color="#FD9C2D" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="g">
          <stop stop-color="#DF2034" offset="0%" />
          <stop stop-color="#CA1A2C" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="h">
          <stop stop-color="#0B4BAD" offset="0%" />
          <stop stop-color="#08429A" offset="100%" />
        </linearGradient>
        <circle id="d" cx="2.5" cy="2.5" r="2.5" />
      </defs>
      <g fill="none" fill-rule="evenodd">
        <path fill="url(#a)" d="M0 0h21v15H0z" />
        <path fill="url(#b)" d="M0 0h21v4H0z" />
        <path fill="url(#c)" d="M0 11h21v4H0z" />
        <path fill="url(#a)" d="M0 4h21v7H0z" />
        <g transform="translate(8 5)">
          <mask id="f" fill="#fff">
            <use xlinkHref="#d" />
          </mask>
          <path fill="url(#e)" mask="url(#f)" d="M0 0h5v2.5H0z" />
          <path fill="#FFF" mask="url(#f)" d="M1 1.5h3l-.5 1h-2z" />
          <path
            d="M2 0h1v1.495A.508.508 0 012.5 2a.495.495 0 01-.5-.505V0zM1 1s.75 1.5 1.5 1.5S4 1 4 1v1c0 .552-.443 1-.999 1H1.999A.997.997 0 011 2V1z"
            fill="url(#g)"
            mask="url(#f)"
          />
          <path fill="url(#h)" mask="url(#f)" d="M0 3h5v2H0z" />
          <path fill="#FFF" mask="url(#f)" d="M0 3.5h5V4H0z" />
        </g>
      </g>
    </svg>
  );
};

PF.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PF.defaultProps = {
  width: "21",
  height: "15",
};

export default PF;
