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
      <title>{"GF"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GF_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GF_svg_linearGradient-2"
        >
          <stop stopColor="#2DA446" offset="0%" />
          <stop stopColor="#218736" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GF_svg_linearGradient-3"
        >
          <stop stopColor="#FFE24A" offset="0%" />
          <stop stopColor="#FCDC34" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GF_svg_linearGradient-4"
        >
          <stop stopColor="#E7242C" offset="0%" />
          <stop stopColor="#D61C24" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="GF_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="GF_svg_GF">
          <rect
            id="GF_svg_FlagBackground"
            fill="url(#GF_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="GF_svg_Mask-Copy"
            fill="url(#GF_svg_linearGradient-2)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <polygon
            id="GF_svg_Rectangle-2"
            fill="url(#GF_svg_linearGradient-3)"
            points="0 0 21 15 0 15"
          />
          <polygon
            id="GF_svg_Star-53"
            fill="url(#GF_svg_linearGradient-4)"
            points="10.5 9.07346292 8.66317109 10.4031781 9.36019403 8.24534541 7.52794839 6.90932189 9.79556117 6.90542313 10.5 4.75 11.2044388 6.90542313 13.4720516 6.90932189 11.639806 8.24534541 12.3368289 10.4031781"
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
