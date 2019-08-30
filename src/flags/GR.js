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
      <title>{"GR"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GR_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GR_svg_linearGradient-2"
        >
          <stop stopColor="#1C6DC1" offset="0%" />
          <stop stopColor="#1660AD" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="GR_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="GR_svg_GR">
          <rect
            id="GR_svg_FlagBackground"
            fill="url(#GR_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <path
            d="M0,0 L4,0 L4,4 L0,4 L0,0 Z M6,0 L10,0 L10,4 L6,4 L6,0 Z M10,0 L21,0 L21,2 L10,2 L10,0 Z M10,4 L21,4 L21,6 L10,6 L10,4 Z M10,8 L21,8 L21,10 L10,10 L10,8 Z M0,12 L21,12 L21,14 L0,14 L0,12 Z M6,6 L10,6 L10,10 L6,10 L6,6 Z M0,6 L4,6 L4,10 L0,10 L0,6 Z"
            id="GR_svg_Rectangle-537"
            fill="url(#GR_svg_linearGradient-2)"
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
