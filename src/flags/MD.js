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
          id="MD_svg_prefix__a"
        >
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="MD_svg_prefix__b"
        >
          <stop stopColor="#EB1C43" offset="0%" />
          <stop stopColor="#CA1134" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="MD_svg_prefix__c"
        >
          <stop stopColor="#115BCB" offset="0%" />
          <stop stopColor="#094AAC" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="MD_svg_prefix__f"
        >
          <stop stopColor="#FFD953" offset="0%" />
          <stop stopColor="#FFD130" offset="100%" />
        </linearGradient>
        <filter
          x="-10.7%"
          y="-5%"
          width="121.4%"
          height="110%"
          filterUnits="objectBoundingBox"
          id="MD_svg_prefix__d"
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
        <path id="MD_svg_prefix__e" d="M7 0h7v15H7z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#MD_svg_prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#MD_svg_prefix__b)" d="M10 0h11v15H10z" />
        <path fill="url(#MD_svg_prefix__c)" d="M0 0h7v15H0z" />
        <use
          fill="#000"
          filter="url(#MD_svg_prefix__d)"
          xlinkHref="#MD_svg_prefix__e"
        />
        <use fill="url(#MD_svg_prefix__f)" xlinkHref="#MD_svg_prefix__e" />
        <path
          d="M9 6h1l.5-1.5L11 6h1v3l-1.5 1L9 9V6zm1 1v1.5h1V7h-1z"
          fill="#AF7F59"
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
