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
      <title>{"WS"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="WS_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="WS_svg_linearGradient-2"
        >
          <stop stopColor="#E31F37" offset="0%" />
          <stop stopColor="#CC162C" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="WS_svg_linearGradient-3"
        >
          <stop stopColor="#083B9A" offset="0%" />
          <stop stopColor="#042E7D" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="WS_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="WS_svg_WS">
          <rect
            id="WS_svg_FlagBackground"
            fill="url(#WS_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="WS_svg_Mask-Copy"
            fill="url(#WS_svg_linearGradient-2)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <polygon
            id="WS_svg_Rectangle-2"
            fill="url(#WS_svg_linearGradient-3)"
            points="0 8 11 8 11 0 0 0"
          />
          <path
            d="M5,7 L4.29289322,7.20710678 L4.5,6.5 L4.29289322,5.79289322 L5,6 L5.70710678,5.79289322 L5.5,6.5 L5.70710678,7.20710678 L5,7 Z M5,2 L4.29289322,2.20710678 L4.5,1.5 L4.29289322,0.792893219 L5,1 L5.70710678,0.792893219 L5.5,1.5 L5.70710678,2.20710678 L5,2 Z M3,4.5 L2.29289322,4.70710678 L2.5,4 L2.29289322,3.29289322 L3,3.5 L3.70710678,3.29289322 L3.5,4 L3.70710678,4.70710678 L3,4.5 Z M7.5,4 L6.79289322,4.20710678 L7,3.5 L6.79289322,2.79289322 L7.5,3 L8.20710678,2.79289322 L8,3.5 L8.20710678,4.20710678 L7.5,4 Z M6.25,5.5 C6.11192881,5.5 6,5.38807119 6,5.25 C6,5.11192881 6.11192881,5 6.25,5 C6.38807119,5 6.5,5.11192881 6.5,5.25 C6.5,5.38807119 6.38807119,5.5 6.25,5.5 Z"
            id="WS_svg_Star-2"
            fill="url(#WS_svg_linearGradient-1)"
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
