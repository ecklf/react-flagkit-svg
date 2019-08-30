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
      <title>{"BO"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="BO_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="BO_svg_linearGradient-2"
        >
          <stop stopColor="#058C3F" offset="0%" />
          <stop stopColor="#007A34" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="BO_svg_linearGradient-3"
        >
          <stop stopColor="#E63426" offset="0%" />
          <stop stopColor="#D52B1E" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="BO_svg_linearGradient-4"
        >
          <stop stopColor="#FFEB1F" offset="0%" />
          <stop stopColor="#FAE400" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="BO_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="BO_svg_BO">
          <rect
            id="BO_svg_FlagBackground"
            fill="url(#BO_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="BO_svg_Rectangle-2"
            fill="url(#BO_svg_linearGradient-2)"
            x={0}
            y={10}
            width={21}
            height={5}
          />
          <rect
            id="BO_svg_Rectangle-2"
            fill="url(#BO_svg_linearGradient-3)"
            x={0}
            y={0}
            width={21}
            height={5}
          />
          <rect
            id="BO_svg_Rectangle-2"
            fill="url(#BO_svg_linearGradient-4)"
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
