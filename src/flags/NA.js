import React from "react";
import PropTypes from "prop-types";

const NA = props => {
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
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="m">
          <stop stopColor="#E52347" offset="0%" />
          <stop stopColor="#D01739" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="j">
          <stop stopColor="#1BAC55" offset="0%" />
          <stop stopColor="#149447" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="d">
          <stop stopColor="#0C4799" offset="0%" />
          <stop stopColor="#05387E" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="g">
          <stop stopColor="#FFD243" offset="0%" />
          <stop stopColor="#FFCD2F" offset="100%" />
        </linearGradient>
        <filter
          x="-3.6%"
          y="-7.5%"
          width="107.1%"
          height="115%"
          filterUnits="objectBoundingBox"
          id="b"
        >
          <feMorphology
            radius=".25"
            operator="dilate"
            in="SourceAlpha"
            result="shadowSpreadOuter1"
          />
          <feOffset in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
          <feColorMatrix
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
            in="shadowOffsetOuter1"
          />
        </filter>
        <filter
          x="-3.6%"
          y="-7.5%"
          width="107.1%"
          height="115%"
          filterUnits="objectBoundingBox"
          id="h"
        >
          <feMorphology
            radius=".25"
            operator="dilate"
            in="SourceAlpha"
            result="shadowSpreadOuter1"
          />
          <feOffset in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
          <feColorMatrix
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
            in="shadowOffsetOuter1"
          />
        </filter>
        <filter
          x="-3.1%"
          y="-3.9%"
          width="106.2%"
          height="107.9%"
          filterUnits="objectBoundingBox"
          id="k"
        >
          <feMorphology
            radius=".25"
            operator="dilate"
            in="SourceAlpha"
            result="shadowSpreadOuter1"
          />
          <feOffset in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
          <feColorMatrix
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
            in="shadowOffsetOuter1"
          />
        </filter>
        <filter
          x="-6.2%"
          y="-6.2%"
          width="112.5%"
          height="125%"
          filterUnits="objectBoundingBox"
          id="e"
        >
          <feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1" />
          <feColorMatrix
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
            in="shadowOffsetOuter1"
          />
        </filter>
        <path
          id="f"
          d="M6.621 6.804l-.765.848.058-1.14-1.14.057.847-.765-.847-.765 1.14.058-.058-1.14.765.847.766-.848-.058 1.14 1.14-.057-.848.765.848.765-1.14-.058.058 1.14z"
        />
        <path id="c" d="M3.121 12.304l21-10h-21z" />
        <path id="i" d="M3.121 17.304h21v-10z" />
        <path id="l" d="M5.433 19.304L25.75 6.609 21.81.304 1.493 12.999z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#a)" d="M0 0h21v15H0z" />
        <g transform="translate(-3.12 -2.3)">
          <use fill="#000" filter="url(#b)" xlinkHref="#c" />
          <use fill="url(#d)" xlinkHref="#c" />
        </g>
        <g transform="translate(-3.12 -2.3)">
          <use fill="#000" filter="url(#e)" xlinkHref="#f" />
          <use fill="url(#g)" xlinkHref="#f" />
        </g>
        <g transform="translate(-3.12 -2.3)">
          <use fill="#000" filter="url(#h)" xlinkHref="#i" />
          <use fill="url(#j)" xlinkHref="#i" />
        </g>
        <g transform="translate(-3.12 -2.3)">
          <use fill="#000" filter="url(#k)" xlinkHref="#l" />
          <use fill="url(#a)" xlinkHref="#l" />
        </g>
        <path
          fill="url(#m)"
          d="M2.65 19.608L27.243 4.24 24.593 0 0 15.368z"
          transform="translate(-3.12 -2.3)"
        />
      </g>
    </svg>
  );
};

NA.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

NA.defaultProps = {
  size: 15,
  width: 21,
  height: 15,
};

export default NA;
