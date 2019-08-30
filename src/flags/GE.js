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
      <title>{"GE"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GE_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GE_svg_linearGradient-2"
        >
          <stop stopColor="#FF2B37" offset="0%" />
          <stop stopColor="#FD0D1B" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="GE_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="GE_svg_GE">
          <rect
            id="GE_svg_FlagBackground"
            fill="url(#GE_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <path
            d="M9,6 L0,6 L0,9 L9,9 L9,15 L12,15 L12,9 L21,9 L21,6 L12,6 L12,0 L9,0 L9,6 Z"
            id="GE_svg_Rectangle-2"
            fill="url(#GE_svg_linearGradient-2)"
          />
          <path
            d="M16.2,2.7 L16,1.5 L17,1.5 L16.8,2.7 L18,2.5 L18,3.5 L16.8,3.3 L17,4.5 L16,4.5 L16.2,3.3 L15,3.5 L15,2.5 L16.2,2.7 Z"
            id="GE_svg_Rectangle-742"
            fill="#FD0D1B"
          />
          <path
            d="M4.2,2.7 L4,1.5 L5,1.5 L4.8,2.7 L6,2.5 L6,3.5 L4.8,3.3 L5,4.5 L4,4.5 L4.2,3.3 L3,3.5 L3,2.5 L4.2,2.7 Z"
            id="GE_svg_Rectangle-742"
            fill="#FD0D1B"
          />
          <path
            d="M4.2,11.7 L4,10.5 L5,10.5 L4.8,11.7 L6,11.5 L6,12.5 L4.8,12.3 L5,13.5 L4,13.5 L4.2,12.3 L3,12.5 L3,11.5 L4.2,11.7 Z"
            id="GE_svg_Rectangle-742"
            fill="#FD0D1B"
          />
          <path
            d="M16.2,11.7 L16,10.5 L17,10.5 L16.8,11.7 L18,11.5 L18,12.5 L16.8,12.3 L17,13.5 L16,13.5 L16.2,12.3 L15,12.5 L15,11.5 L16.2,11.7 Z"
            id="GE_svg_Rectangle-742"
            fill="#FD0D1B"
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
