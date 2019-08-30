import React from "react";
import PropTypes from "prop-types";

const BL = props => {
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
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c">
          <stop stopColor="#216CD3" offset="0%" />
          <stop stopColor="#1557B2" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="d">
          <stop stopColor="#F7E14B" offset="0%" />
          <stop stopColor="#F7DF3E" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="f">
          <stop stopColor="#E12539" offset="0%" />
          <stop stopColor="#CA192C" offset="100%" />
        </linearGradient>
        <path
          d="M.5 0h7v4.491c0 .557-.336 1.297-.76 1.66L5.147 7.518c-.633.542-1.662.54-2.292 0L1.259 6.15C.84 5.791.5 5.05.5 4.491V0z"
          id="b"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#a)" d="M0 0h21v15H0z" />
        <g transform="translate(6.5 5)">
          <mask id="e" fill="#fff">
            <use xlinkHref="#b" />
          </mask>
          <use fill="url(#c)" xlinkHref="#b" />
          <path
            d="M2 2a.5.5 0 110-1 .5.5 0 010 1zm2 0a.5.5 0 110-1 .5.5 0 010 1zm2 0a.5.5 0 110-1 .5.5 0 010 1zM2.5 6.5a.5.5 0 110-1 .5.5 0 010 1zM4 7a.5.5 0 110-1 .5.5 0 010 1zm1.5-.5a.5.5 0 110-1 .5.5 0 010 1z"
            fill="url(#d)"
            mask="url(#e)"
          />
          <path fill="url(#f)" mask="url(#e)" d="M.5 3h7v2h-7z" />
          <circle fill="#FFF" mask="url(#e)" cx="4" cy="4" r="1" />
        </g>
        <path
          d="M6.5 3.5s2-.5 4-.5 4 .5 4 .5l-.5 2S12.25 5 10.5 5 7 5.5 7 5.5l-.5-2z"
          fill="url(#d)"
        />
        <path
          d="M10.5 4.5a.5.5 0 110-1 .5.5 0 010 1zm2 0a.5.5 0 110-1 .5.5 0 010 1zm-4 0a.5.5 0 110-1 .5.5 0 010 1z"
          fill="#5E5216"
        />
      </g>
    </svg>
  );
};

BL.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BL.defaultProps = {
  size: 15,
  width: 21,
  height: 15,
};

export default BL;
