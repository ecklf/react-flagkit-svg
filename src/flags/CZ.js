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
      <title>{"CZ"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="CZ_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="CZ_svg_linearGradient-2"
        >
          <stop stopColor="#E8252A" offset="0%" />
          <stop stopColor="#D7151A" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="CZ_svg_linearGradient-3"
        >
          <stop stopColor="#17579E" offset="0%" />
          <stop stopColor="#10457F" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="CZ_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="CZ_svg_CZ">
          <rect
            id="CZ_svg_FlagBackground"
            fill="url(#CZ_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="CZ_svg_Rectangle-2"
            fill="url(#CZ_svg_linearGradient-2)"
            x={0}
            y={7}
            width={21}
            height={8}
          />
          <rect
            id="CZ_svg_Rectangle-2"
            fill="url(#CZ_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={7}
          />
          <polygon
            id="CZ_svg_Rectangle-83"
            fill="url(#CZ_svg_linearGradient-3)"
            points="0 0 10 7.5 0 15"
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
