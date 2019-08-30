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
      <title>{"UA"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="UA_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="UA_svg_linearGradient-2"
        >
          <stop stopColor="#156DD1" offset="0%" />
          <stop stopColor="#0D5EB9" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="UA_svg_linearGradient-3"
        >
          <stop stopColor="#FFD948" offset="0%" />
          <stop stopColor="#FFD430" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="UA_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="UA_svg_UA">
          <rect
            id="UA_svg_FlagBackground"
            fill="url(#UA_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="UA_svg_Rectangle-2"
            fill="url(#UA_svg_linearGradient-2)"
            x={0}
            y={0}
            width={21}
            height={8}
          />
          <rect
            id="UA_svg_Rectangle-2"
            fill="url(#UA_svg_linearGradient-3)"
            x={0}
            y={8}
            width={21}
            height={7}
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
