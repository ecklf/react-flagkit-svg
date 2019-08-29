import React from "react";
import PropTypes from "prop-types";

const KE = props => {
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
          <stop stop-color="#262626" offset="0%" />
          <stop stop-color="#0D0D0D" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c">
          <stop stop-color="#018301" offset="0%" />
          <stop stop-color="#006700" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="d">
          <stop stop-color="#DC0808" offset="0%" />
          <stop stop-color="#BC0000" offset="100%" />
        </linearGradient>
        <path
          d="M2.5 10.5c1 0 2.5-1.962 2.5-5 0-3.038-1.5-5-2.5-5S0 2.462 0 5.5c0 3.038 1.5 5 2.5 5z"
          id="e"
        />
      </defs>
      <g fill="none" fill-rule="evenodd">
        <path fill="url(#a)" d="M0 0h21v15H0z" />
        <path fill="url(#b)" d="M0 0h21v4H0z" />
        <path fill="url(#c)" d="M0 11h21v4H0z" />
        <path fill="url(#a)" d="M0 4h21v7H0z" />
        <path fill="url(#d)" d="M0 5h21v5H0z" />
        <g transform="translate(8 2)">
          <mask id="f" fill="#fff">
            <use xlinkHref="#e" />
          </mask>
          <use fill="#BC0000" xlinkHref="#e" />
          <ellipse
            fill="url(#b)"
            mask="url(#f)"
            cx="-1.5"
            cy="5.5"
            rx="2.5"
            ry="5.5"
          />
          <ellipse
            fill="url(#b)"
            mask="url(#f)"
            cx="6.5"
            cy="5.5"
            rx="2.5"
            ry="5.5"
          />
          <path
            d="M2.5 7C2.224 7 2 6.328 2 5.5S2.224 4 2.5 4s.5.672.5 1.5S2.776 7 2.5 7zm0-3C2.224 4 2 3.105 2 2s.224-2 .5-2 .5.895.5 2-.224 2-.5 2zm0 7c-.276 0-.5-.895-.5-2s.224-2 .5-2 .5.895.5 2-.224 2-.5 2z"
            fill="url(#a)"
            mask="url(#f)"
          />
        </g>
      </g>
    </svg>
  );
};

KE.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

KE.defaultProps = {
  width: "21",
  height: "15",
};

export default KE;
