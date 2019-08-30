import React from "react";
import PropTypes from "prop-types";

const SvgComponent = ({ size, width, height, ...otherProps }) => {
  if (size !== height) {
    width = width * (size / height);
    height = height * (size / height);
  }

  return (
    <svg
      width={width}
      height={height}
      size={size}
      viewBox="0 0 21 15"
      {...otherProps}
    >
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="NA_svg_prefix__a"
        >
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="NA_svg_prefix__m"
        >
          <stop stopColor="#E52347" offset="0%" />
          <stop stopColor="#D01739" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="NA_svg_prefix__j"
        >
          <stop stopColor="#1BAC55" offset="0%" />
          <stop stopColor="#149447" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="NA_svg_prefix__d"
        >
          <stop stopColor="#0C4799" offset="0%" />
          <stop stopColor="#05387E" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="NA_svg_prefix__g"
        >
          <stop stopColor="#FFD243" offset="0%" />
          <stop stopColor="#FFCD2F" offset="100%" />
        </linearGradient>
        <filter
          x="-3.6%"
          y="-7.5%"
          width="107.1%"
          height="115%"
          filterUnits="objectBoundingBox"
          id="NA_svg_prefix__b"
        >
          <feMorphology
            radius={0.25}
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
          id="NA_svg_prefix__h"
        >
          <feMorphology
            radius={0.25}
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
          id="NA_svg_prefix__k"
        >
          <feMorphology
            radius={0.25}
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
          id="NA_svg_prefix__e"
        >
          <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
          <feColorMatrix
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
            in="shadowOffsetOuter1"
          />
        </filter>
        <path
          id="NA_svg_prefix__f"
          d="M6.621 6.804l-.765.848.058-1.14-1.14.057.847-.765-.847-.765 1.14.058-.058-1.14.765.847.766-.848-.058 1.14 1.14-.057-.848.765.848.765-1.14-.058.058 1.14z"
        />
        <path id="NA_svg_prefix__c" d="M3.121 12.304l21-10h-21z" />
        <path id="NA_svg_prefix__i" d="M3.121 17.304h21v-10z" />
        <path
          id="NA_svg_prefix__l"
          d="M5.433 19.304L25.75 6.609 21.81.304 1.493 12.999z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#NA_svg_prefix__a)" d="M0 0h21v15H0z" />
        <g transform="translate(-3.12 -2.3)">
          <use
            fill="#000"
            filter="url(#NA_svg_prefix__b)"
            xlinkHref="#NA_svg_prefix__c"
          />
          <use fill="url(#NA_svg_prefix__d)" xlinkHref="#NA_svg_prefix__c" />
        </g>
        <g transform="translate(-3.12 -2.3)">
          <use
            fill="#000"
            filter="url(#NA_svg_prefix__e)"
            xlinkHref="#NA_svg_prefix__f"
          />
          <use fill="url(#NA_svg_prefix__g)" xlinkHref="#NA_svg_prefix__f" />
        </g>
        <g transform="translate(-3.12 -2.3)">
          <use
            fill="#000"
            filter="url(#NA_svg_prefix__h)"
            xlinkHref="#NA_svg_prefix__i"
          />
          <use fill="url(#NA_svg_prefix__j)" xlinkHref="#NA_svg_prefix__i" />
        </g>
        <g transform="translate(-3.12 -2.3)">
          <use
            fill="#000"
            filter="url(#NA_svg_prefix__k)"
            xlinkHref="#NA_svg_prefix__l"
          />
          <use fill="url(#NA_svg_prefix__a)" xlinkHref="#NA_svg_prefix__l" />
        </g>
        <path
          fill="url(#NA_svg_prefix__m)"
          d="M2.65 19.608L27.243 4.24 24.593 0 0 15.368z"
          transform="translate(-3.12 -2.3)"
        />
      </g>
    </svg>
  );
};

SvgComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
SvgComponent.defaultProps = {
  size: "15",
  width: "21",
  height: "15",
};
export default SvgComponent;
