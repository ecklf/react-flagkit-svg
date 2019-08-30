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
      <title>{"NE"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="NE_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="NE_svg_linearGradient-2"
        >
          <stop stopColor="#F0642F" offset="0%" />
          <stop stopColor="#DF531D" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="NE_svg_linearGradient-3"
        >
          <stop stopColor="#2DCC45" offset="0%" />
          <stop stopColor="#1FAF35" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="NE_svg_linearGradient-4"
        >
          <stop stopColor="#E85C27" offset="0%" />
          <stop stopColor="#DF531D" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="NE_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="NE_svg_NE">
          <rect
            id="NE_svg_FlagBackground"
            fill="url(#NE_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="NE_svg_Rectangle-2"
            fill="url(#NE_svg_linearGradient-2)"
            x={0}
            y={0}
            width={21}
            height={5}
          />
          <rect
            id="NE_svg_Rectangle-2"
            fill="url(#NE_svg_linearGradient-3)"
            x={0}
            y={10}
            width={21}
            height={5}
          />
          <rect
            id="NE_svg_Rectangle-2-Copy-4"
            fill="url(#NE_svg_linearGradient-1)"
            x={0}
            y={5}
            width={21}
            height={5}
          />
          <circle
            id="NE_svg_Oval-12"
            fill="url(#NE_svg_linearGradient-4)"
            cx={10.5}
            cy={7.5}
            r={2}
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
