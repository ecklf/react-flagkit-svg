import React from "react";
import PropTypes from "prop-types";

const UG = props => {
  const { width, height, ...otherProps } = props;
  return (
    <svg
      width={width}
      height={height}
      {...otherProps}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a">
          <stop stop-color="#FFF" offset="0%" />
          <stop stop-color="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b">
          <stop stop-color="#262626" offset="0%" />
          <stop stop-color="#0D0D0D" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c">
          <stop stop-color="#ED1623" offset="0%" />
          <stop stop-color="#D70915" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="d">
          <stop stop-color="#FEE044" offset="0%" />
          <stop stop-color="#FCDB32" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fill-rule="evenodd">
        <path fill="url(#a)" d="M0 0h21v15H0z" />
        <path fill="url(#b)" d="M0 0h21v2H0zm0 8h21v2H0z" />
        <path fill="url(#c)" d="M0 5h21v3H0z" />
        <path fill="url(#d)" d="M0 2h21v3H0z" />
        <path fill="url(#c)" d="M0 13h21v2H0z" />
        <path fill="url(#d)" d="M0 10h21v3H0z" />
        <circle fill="url(#a)" cx="10.5" cy="7.5" r="3.5" />
        <path
          d="M9.68 5.68a.253.253 0 010-.36l.14-.14c.1-.1.252-.27.338-.362l.122-.099c.122.017.317-.036.442-.012l.119.092a.424.424 0 01.043.433l-.268.536a1.298 1.298 0 00-.116.482c0 .138.092.296.232.366l.536.268c.128.064.31.194.406.29l.652.652a.36.36 0 01.058.406l-.268.536c-.064.128-.194.154-.297.051l-.138-.138a.253.253 0 00-.362 0l-.138.138A.71.71 0 0011 9.25a.69.69 0 00.18.43l.14.14c.1.1.062.18-.068.18h-1.004c-.137 0-.17-.078-.067-.18l.138-.14c.1-.1.181-.296.181-.43a.253.253 0 00-.25-.25.691.691 0 00-.43.18l-.14.14c-.1.1-.258.102-.36 0l-.14-.14a.253.253 0 010-.36l.14-.14c.1-.1.287-.18.432-.18h.496c.139 0 .171-.08.08-.172L9.172 7.172a.245.245 0 01.002-.346l.652-.652a.249.249 0 00-.007-.355l-.138-.138z"
          fill="url(#b)"
        />
      </g>
    </svg>
  );
};

UG.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UG.propTypes = {
  width: "21",
  height: "15",
};

export default UG;
