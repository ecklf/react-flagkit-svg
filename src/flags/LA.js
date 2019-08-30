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
      <title>{"LA"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="LA_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="LA_svg_linearGradient-2"
        >
          <stop stopColor="#073A88" offset="0%" />
          <stop stopColor="#032A67" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="LA_svg_linearGradient-3"
        >
          <stop stopColor="#E2273E" offset="0%" />
          <stop stopColor="#CC162C" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="LA_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="LA_svg_LA">
          <rect
            id="LA_svg_FlagBackground"
            fill="url(#LA_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="LA_svg_Rectangle-2-Copy-4"
            fill="url(#LA_svg_linearGradient-2)"
            x={0}
            y={4}
            width={21}
            height={7}
          />
          <rect
            id="LA_svg_Rectangle-2"
            fill="url(#LA_svg_linearGradient-3)"
            x={0}
            y={0}
            width={21}
            height={4}
          />
          <rect
            id="LA_svg_Rectangle-2"
            fill="url(#LA_svg_linearGradient-3)"
            x={0}
            y={11}
            width={21}
            height={4}
          />
          <circle
            id="LA_svg_Oval-12"
            fill="url(#LA_svg_linearGradient-1)"
            cx={10.5}
            cy={7.5}
            r={2.5}
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
