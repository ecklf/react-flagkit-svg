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
      <title>{"SL"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SL_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SL_svg_linearGradient-2"
        >
          <stop stopColor="#35CE4F" offset="0%" />
          <stop stopColor="#2AB441" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SL_svg_linearGradient-3"
        >
          <stop stopColor="#1C87DB" offset="0%" />
          <stop stopColor="#1175C4" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="SL_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="SL_svg_SL">
          <rect
            id="SL_svg_FlagBackground"
            fill="url(#SL_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="SL_svg_Rectangle-2"
            fill="url(#SL_svg_linearGradient-2)"
            x={0}
            y={0}
            width={21}
            height={5}
          />
          <rect
            id="SL_svg_Rectangle-2"
            fill="url(#SL_svg_linearGradient-3)"
            x={0}
            y={10}
            width={21}
            height={5}
          />
          <rect
            id="SL_svg_Rectangle-2"
            fill="url(#SL_svg_linearGradient-1)"
            x={0}
            y={5}
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
