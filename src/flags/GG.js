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
      <title>{"GG"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GG_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GG_svg_linearGradient-2"
        >
          <stop stopColor="#F33349" offset="0%" />
          <stop stopColor="#E51D34" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GG_svg_linearGradient-3"
        >
          <stop stopColor="#FCE24C" offset="0%" />
          <stop stopColor="#F9DC38" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="GG_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="GG_svg_GG">
          <rect
            id="GG_svg_FlagBackground"
            fill="url(#GG_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <path
            d="M9,6 L0,6 L0,9 L9,9 L9,15 L12,15 L12,9 L21,9 L21,6 L12,6 L12,0 L9,0 L9,6 Z"
            id="GG_svg_Rectangle-2"
            fill="url(#GG_svg_linearGradient-2)"
          />
          <path
            d="M10,8 L10,12 L9.5,13 L11.5,13 L11,12 L11,8 L15,8 L16,8.5 L16,6.5 L15,7 L11,7 L11,3 L11.5,2 L9.5,2 L10,3 L10,7 L6,7 L5,6.5 L5,8.5 L6,8 L10,8 Z"
            id="GG_svg_Combined-Shape"
            fill="url(#GG_svg_linearGradient-3)"
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
