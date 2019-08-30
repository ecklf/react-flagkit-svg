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
      <title>{"LV"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="LV_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="LV_svg_linearGradient-2"
        >
          <stop stopColor="#B9414B" offset="0%" />
          <stop stopColor="#9D323B" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="LV_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="LV_svg_LV">
          <rect
            id="LV_svg_FlagBackground"
            fill="url(#LV_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="LV_svg_Rectangle-2"
            fill="url(#LV_svg_linearGradient-2)"
            x={0}
            y={0}
            width={21}
            height={6}
          />
          <rect
            id="LV_svg_Rectangle-2"
            fill="url(#LV_svg_linearGradient-2)"
            x={0}
            y={9}
            width={21}
            height={6}
          />
          <rect
            id="LV_svg_Rectangle-2"
            fill="url(#LV_svg_linearGradient-1)"
            x={0}
            y={6}
            width={21}
            height={3}
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
