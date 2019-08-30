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
      <title>{"HN"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="HN_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="HN_svg_linearGradient-2"
        >
          <stop stopColor="#0884E6" offset="0%" />
          <stop stopColor="#0074D0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="HN_svg_linearGradient-3"
        >
          <stop stopColor="#0E88E9" offset="0%" />
          <stop stopColor="#0074D0" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="HN_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="HN_svg_HN">
          <rect
            id="HN_svg_FlagBackground"
            fill="url(#HN_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="HN_svg_Rectangle-2"
            fill="url(#HN_svg_linearGradient-2)"
            x={0}
            y={0}
            width={21}
            height={5}
          />
          <rect
            id="HN_svg_Rectangle-2"
            fill="url(#HN_svg_linearGradient-2)"
            x={0}
            y={10}
            width={21}
            height={5}
          />
          <rect
            id="HN_svg_Rectangle-2"
            fill="url(#HN_svg_linearGradient-1)"
            x={0}
            y={5}
            width={21}
            height={5}
          />
          <polygon
            id="HN_svg_Star-20"
            fill="url(#HN_svg_linearGradient-3)"
            points="10.5 8 9.79289322 8.20710678 10 7.5 9.79289322 6.79289322 10.5 7 11.2071068 6.79289322 11 7.5 11.2071068 8.20710678"
          />
          <polygon
            id="HN_svg_Star-20-Copy"
            fill="url(#HN_svg_linearGradient-3)"
            points="14.5 7 13.7928932 7.20710678 14 6.5 13.7928932 5.79289322 14.5 6 15.2071068 5.79289322 15 6.5 15.2071068 7.20710678"
          />
          <polygon
            id="HN_svg_Star-20-Copy-2"
            fill="url(#HN_svg_linearGradient-3)"
            points="14.5 9 13.7928932 9.20710678 14 8.5 13.7928932 7.79289322 14.5 8 15.2071068 7.79289322 15 8.5 15.2071068 9.20710678"
          />
          <polygon
            id="HN_svg_Star-20-Copy-3"
            fill="url(#HN_svg_linearGradient-3)"
            points="6.5 9 5.79289322 9.20710678 6 8.5 5.79289322 7.79289322 6.5 8 7.20710678 7.79289322 7 8.5 7.20710678 9.20710678"
          />
          <polygon
            id="HN_svg_Star-20-Copy-4"
            fill="url(#HN_svg_linearGradient-3)"
            points="6.5 7 5.79289322 7.20710678 6 6.5 5.79289322 5.79289322 6.5 6 7.20710678 5.79289322 7 6.5 7.20710678 7.20710678"
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
