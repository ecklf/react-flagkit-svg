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
      <title>{"GL"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GL_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <rect id="GL_svg_path-2" x={0} y={0} width={21} height={8} />
        <filter
          x="-3.6%"
          y="-9.4%"
          width="107.1%"
          height="118.8%"
          filterUnits="objectBoundingBox"
          id="GL_svg_filter-3"
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
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GL_svg_linearGradient-4"
        >
          <stop stopColor="#E82245" offset="0%" />
          <stop stopColor="#CC1838" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="GL_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="GL_svg_GL">
          <rect
            id="GL_svg_FlagBackground"
            fill="url(#GL_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <g id="GL_svg_Rectangle-2">
            <use
              fill="black"
              fillOpacity={1}
              filter="url(#GL_svg_filter-3)"
              xlinkHref="#path-2"
            />
            <use
              fill="url(#GL_svg_linearGradient-1)"
              fillRule="evenodd"
              xlinkHref="#path-2"
            />
          </g>
          <path
            d="M3,8 L0,8 L0,15 L21,15 L21,8 L11,8 C11,5.790861 9.209139,4 7,4 C4.790861,4 3,5.790861 3,8 Z"
            id="GL_svg_Combined-Shape"
            fill="url(#GL_svg_linearGradient-4)"
          />
          <path
            d="M3,8 C3,10.209139 4.790861,12 7,12 C9.209139,12 11,10.209139 11,8 L3,8 Z"
            id="GL_svg_Combined-Shape"
            fill="url(#GL_svg_linearGradient-1)"
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
