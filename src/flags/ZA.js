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
      <title>{"ZA"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="ZA_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="ZA_svg_linearGradient-2"
        >
          <stop stopColor="#06A86E" offset="0%" />
          <stop stopColor="#007A4E" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="ZA_svg_linearGradient-3"
        >
          <stop stopColor="#FFBF2E" offset="0%" />
          <stop stopColor="#FFB612" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="ZA_svg_linearGradient-4"
        >
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="ZA_svg_linearGradient-5"
        >
          <stop stopColor="#F44E46" offset="0%" />
          <stop stopColor="#DF3931" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="ZA_svg_linearGradient-6"
        >
          <stop stopColor="#072CB4" offset="0%" />
          <stop stopColor="#042396" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="ZA_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="ZA_svg_ZA">
          <rect
            id="ZA_svg_FlagBackground"
            fill="url(#ZA_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="ZA_svg_Mask"
            fill="url(#ZA_svg_linearGradient-2)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <polygon
            id="ZA_svg_Rectangle-83"
            fill="url(#ZA_svg_linearGradient-3)"
            points="0 2 7 7.5 0 13"
          />
          <polygon
            id="ZA_svg_Rectangle-83-Copy-5"
            fill="url(#ZA_svg_linearGradient-4)"
            points="-1 2.25 5.75 7.5 -1 12.75"
          />
          <polygon
            id="ZA_svg_Rectangle-83-Copy"
            fill="#FFFFFF"
            points="9 6 2 0 21 0 21 6"
          />
          <polygon
            id="ZA_svg_Rectangle-83-Copy-3"
            fill="url(#ZA_svg_linearGradient-5)"
            points="9.25 5 3.25 0 21 0 21 5"
          />
          <polygon
            id="ZA_svg_Rectangle-83-Copy-2"
            fill="#FFFFFF"
            points="2 15 21 15 21 9 9 9"
          />
          <polygon
            id="ZA_svg_Rectangle-83-Copy-4"
            fill="url(#ZA_svg_linearGradient-6)"
            points="3.25 15 21 15 21 10 9.25 10"
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
