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
      <title>{"FO"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="FO_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="FO_svg_linearGradient-2"
        >
          <stop stopColor="#1879D6" offset="0%" />
          <stop stopColor="#0F67BB" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="FO_svg_linearGradient-3"
        >
          <stop stopColor="#F13E4F" offset="0%" />
          <stop stopColor="#EB2D3F" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="FO_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="FO_svg_FO">
          <rect
            id="FO_svg_FlagBackground"
            fill="url(#FO_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <polygon
            id="FO_svg_Rectangle-2"
            fill="url(#FO_svg_linearGradient-2)"
            points="0 9 6 9 6 15 9 15 9 9 21 9 21 6 9 6 9 0 6 0 6 6 0 6"
          />
          <polygon
            id="FO_svg_Rectangle-2"
            fill="url(#FO_svg_linearGradient-3)"
            points="0 8 7 8 7 15 8 15 8 8 21 8 21 7 8 7 8 0 7 0 7 7 0 7"
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
