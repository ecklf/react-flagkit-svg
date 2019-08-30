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
      <title>{"XK"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="XK_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="XK_svg_linearGradient-2"
        >
          <stop stopColor="#2F5FBF" offset="0%" />
          <stop stopColor="#244EA3" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="XK_svg_linearGradient-3"
        >
          <stop stopColor="#E9C072" offset="0%" />
          <stop stopColor="#CFA557" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="XK_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="XK_svg_XK">
          <rect
            id="XK_svg_FlagBackground"
            fill="url(#XK_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="XK_svg_Mask-Copy"
            fill="url(#XK_svg_linearGradient-2)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <path
            d="M9,3.5 L8.29289322,3.70710678 L8.5,3 L8.29289322,2.29289322 L9,2.5 L9.70710678,2.29289322 L9.5,3 L9.70710678,3.70710678 L9,3.5 Z M12,3.5 L11.2928932,3.70710678 L11.5,3 L11.2928932,2.29289322 L12,2.5 L12.7071068,2.29289322 L12.5,3 L12.7071068,3.70710678 L12,3.5 Z M15,4.5 L14.2928932,4.70710678 L14.5,4 L14.2928932,3.29289322 L15,3.5 L15.7071068,3.29289322 L15.5,4 L15.7071068,4.70710678 L15,4.5 Z M17,6.5 L16.2928932,6.70710678 L16.5,6 L16.2928932,5.29289322 L17,5.5 L17.7071068,5.29289322 L17.5,6 L17.7071068,6.70710678 L17,6.5 Z M4,6.5 L3.29289322,6.70710678 L3.5,6 L3.29289322,5.29289322 L4,5.5 L4.70710678,5.29289322 L4.5,6 L4.70710678,6.70710678 L4,6.5 Z M6,4.5 L5.29289322,4.70710678 L5.5,4 L5.29289322,3.29289322 L6,3.5 L6.70710678,3.29289322 L6.5,4 L6.70710678,4.70710678 L6,4.5 Z"
            id="XK_svg_Combined-Shape"
            fill="url(#XK_svg_linearGradient-1)"
          />
          <polygon
            id="XK_svg_Rectangle-1408"
            fill="url(#XK_svg_linearGradient-3)"
            points="9 10 8 9.5 7 7.5 8 7.5 9 6.5 9.5 5.5 10.5 5 11 5.5 12 6 12 6.5 12.5 7 14 8 13.5 9.5 12 11 11.5 10 10 11 10 12 9.5 11.5"
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
