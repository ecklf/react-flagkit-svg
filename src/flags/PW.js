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
      <title>{"PW"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="PW_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="PW_svg_linearGradient-2"
        >
          <stop stopColor="#65C6EE" offset="0%" />
          <stop stopColor="#4FAED5" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="PW_svg_linearGradient-3"
        >
          <stop stopColor="#FFE044" offset="0%" />
          <stop stopColor="#FFDD32" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="PW_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="PW_svg_PW">
          <rect
            id="PW_svg_FlagBackground"
            fill="url(#PW_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="PW_svg_Mask-Copy"
            fill="url(#PW_svg_linearGradient-2)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <circle
            id="PW_svg_Oval-9"
            fill="url(#PW_svg_linearGradient-3)"
            cx={9.5}
            cy={7.5}
            r={4.5}
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
