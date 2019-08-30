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
      <title>{"GB-ENG"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GBENG_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GBENG_svg_linearGradient-2"
        >
          <stop stopColor="#E82739" offset="0%" />
          <stop stopColor="#CA1A2B" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="GBENG_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="GBENG_svg_GB-ENG">
          <rect
            id="GBENG_svg_FlagBackground"
            fill="url(#GBENG_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <path
            d="M9,6 L0,6 L0,9 L9,9 L9,15 L12,15 L12,9 L21,9 L21,6 L12,6 L12,0 L9,0 L9,6 Z"
            id="GBENG_svg_Rectangle-2"
            fill="url(#GBENG_svg_linearGradient-2)"
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
