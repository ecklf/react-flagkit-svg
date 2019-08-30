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
          id="GL_svg_prefix__a"
        >
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GL_svg_prefix__d"
        >
          <stop stopColor="#E82245" offset="0%" />
          <stop stopColor="#CC1838" offset="100%" />
        </linearGradient>
        <filter
          x="-3.6%"
          y="-9.4%"
          width="107.1%"
          height="118.8%"
          filterUnits="objectBoundingBox"
          id="GL_svg_prefix__b"
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
        <path id="GL_svg_prefix__c" d="M0 0h21v8H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#GL_svg_prefix__a)" d="M0 0h21v15H0z" />
        <use
          fill="#000"
          filter="url(#GL_svg_prefix__b)"
          xlinkHref="#GL_svg_prefix__c"
        />
        <use fill="url(#GL_svg_prefix__a)" xlinkHref="#GL_svg_prefix__c" />
        <path
          d="M3 8H0v7h21V8H11a4 4 0 10-8 0z"
          fill="url(#GL_svg_prefix__d)"
        />
        <path d="M3 8a4 4 0 108 0H3z" fill="url(#GL_svg_prefix__a)" />
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
