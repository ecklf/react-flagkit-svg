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
      <title>{"TW"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="TW_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="93.7672335%"
          id="TW_svg_linearGradient-2"
        >
          <stop stopColor="#FE3030" offset="0%" />
          <stop stopColor="#FF0000" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="TW_svg_linearGradient-3"
        >
          <stop stopColor="#0909B6" offset="0%" />
          <stop stopColor="#000096" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="TW_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="TW_svg_TW">
          <rect
            id="TW_svg_FlagBackground"
            fill="url(#TW_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="TW_svg_Rectangle-2"
            fill="url(#TW_svg_linearGradient-2)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <polygon
            id="TW_svg_Rectangle-2"
            fill="url(#TW_svg_linearGradient-3)"
            points="0 8 11 8 11 0 0 0"
          />
          <polygon
            id="TW_svg_Star-27"
            fill="url(#TW_svg_linearGradient-1)"
            points="5.5 5.25 4.54329142 6.30969883 4.61611652 4.88388348 3.19030117 4.95670858 4.25 4 3.19030117 3.04329142 4.61611652 3.11611652 4.54329142 1.69030117 5.5 2.75 6.45670858 1.69030117 6.38388348 3.11611652 7.80969883 3.04329142 6.75 4 7.80969883 4.95670858 6.38388348 4.88388348 6.45670858 6.30969883"
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
