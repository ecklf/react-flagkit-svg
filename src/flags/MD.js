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
      viewBox="0 0 21 15"
      size={size}
      {...otherProps}
    >
      <title>{"MD"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="MD_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="MD_svg_linearGradient-2"
        >
          <stop stopColor="#EB1C43" offset="0%" />
          <stop stopColor="#CA1134" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="MD_svg_linearGradient-3"
        >
          <stop stopColor="#115BCB" offset="0%" />
          <stop stopColor="#094AAC" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="MD_svg_linearGradient-4"
        >
          <stop stopColor="#FFD953" offset="0%" />
          <stop stopColor="#FFD130" offset="100%" />
        </linearGradient>
        <rect id="MD_svg_path-5" x={7} y={0} width={7} height={15} />
        <filter
          x="-10.7%"
          y="-5.0%"
          width="121.4%"
          height="110.0%"
          filterUnits="objectBoundingBox"
          id="MD_svg_filter-6"
        >
          <feMorphology
            radius={0.25}
            operator="dilate"
            in="SourceAlpha"
            result="shadowSpreadOuter1"
          />
          <feOffset
            dx={0}
            dy={0}
            in="shadowSpreadOuter1"
            result="shadowOffsetOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.06 0"
            type="matrix"
            in="shadowOffsetOuter1"
          />
        </filter>
      </defs>
      <g
        id="MD_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="MD_svg_MD">
          <rect
            id="MD_svg_FlagBackground"
            fill="url(#MD_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="MD_svg_Mask"
            fill="url(#MD_svg_linearGradient-2)"
            x={10}
            y={0}
            width={11}
            height={15}
          />
          <rect
            id="MD_svg_Rectangle-2"
            fill="url(#MD_svg_linearGradient-3)"
            x={0}
            y={0}
            width={7}
            height={15}
          />
          <g id="MD_svg_Rectangle-2-Copy">
            <use
              fill="black"
              fillOpacity={1}
              filter="url(#MD_svg_filter-6)"
              xlinkHref="#path-5"
            />
            <use
              fill="url(#MD_svg_linearGradient-4)"
              fillRule="evenodd"
              xlinkHref="#path-5"
            />
          </g>
          <path
            d="M9,6 L10,6 L10.5,4.5 L11,6 L12,6 L12,9 L10.5,10 L9,9 L9,6 Z M10,7 L10,8.5 L11,8.5 L11,7 L10,7 Z"
            id="MD_svg_Rectangle-1601"
            fill="#AF7F59"
          />
        </g>
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
  size: "25",
  width: "37",
  height: "25",
};
export default SvgComponent;
