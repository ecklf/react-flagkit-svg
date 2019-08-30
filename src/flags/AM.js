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
      <title>{"AM"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="AM_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="AM_svg_linearGradient-2"
        >
          <stop stopColor="#1047B9" offset="0%" />
          <stop stopColor="#06379D" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="AM_svg_linearGradient-3"
        >
          <stop stopColor="#F01C31" offset="0%" />
          <stop stopColor="#D70A1F" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="AM_svg_linearGradient-4"
        >
          <stop stopColor="#F5B23E" offset="0%" />
          <stop stopColor="#F0A728" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="AM_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="AM_svg_AM">
          <rect
            id="AM_svg_FlagBackground"
            fill="url(#AM_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="AM_svg_Rectangle-2"
            fill="url(#AM_svg_linearGradient-2)"
            x={0}
            y={5}
            width={21}
            height={5}
          />
          <rect
            id="AM_svg_Rectangle-2"
            fill="url(#AM_svg_linearGradient-3)"
            x={0}
            y={0}
            width={21}
            height={5}
          />
          <rect
            id="AM_svg_Rectangle-2"
            fill="url(#AM_svg_linearGradient-4)"
            x={0}
            y={10}
            width={21}
            height={5}
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
