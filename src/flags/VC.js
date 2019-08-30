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
      <title>{"VC"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="VC_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="VC_svg_linearGradient-2"
        >
          <stop stopColor="#08C47A" offset="0%" />
          <stop stopColor="#009F60" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="VC_svg_linearGradient-3"
        >
          <stop stopColor="#0C87E1" offset="0%" />
          <stop stopColor="#0073C7" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="VC_svg_linearGradient-4"
        >
          <stop stopColor="#FFD147" offset="0%" />
          <stop stopColor="#FECA2F" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="VC_svg_linearGradient-5"
        >
          <stop stopColor="#00C778" offset="0%" />
          <stop stopColor="#009F60" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="VC_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="VC_svg_VC">
          <rect
            id="VC_svg_FlagBackground"
            fill="url(#VC_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="VC_svg_Mask"
            fill="url(#VC_svg_linearGradient-2)"
            x={10}
            y={0}
            width={11}
            height={15}
          />
          <rect
            id="VC_svg_Rectangle-2"
            fill="url(#VC_svg_linearGradient-3)"
            x={0}
            y={0}
            width={7}
            height={15}
          />
          <rect
            id="VC_svg_Rectangle-2-Copy"
            fill="url(#VC_svg_linearGradient-4)"
            x={6}
            y={0}
            width={9}
            height={15}
          />
          <path
            d="M11,6 L12.5,3 L14,6 L12.5,9 L11,6 Z M7,6 L8.5,3 L10,6 L8.5,9 L7,6 Z M9,10 L10.5,7 L12,10 L10.5,13 L9,10 Z"
            id="VC_svg_Rectangle-1194"
            fill="url(#VC_svg_linearGradient-5)"
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
