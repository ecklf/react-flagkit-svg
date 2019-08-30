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
      <title>{"EU"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="EU_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="EU_svg_linearGradient-2"
        >
          <stop stopColor="#043CAE" offset="0%" />
          <stop stopColor="#00339A" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="EU_svg_linearGradient-3"
        >
          <stop stopColor="#FFD429" offset="0%" />
          <stop stopColor="#FFCC00" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="EU_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="EU_svg_EU">
          <rect
            id="EU_svg_FlagBackground"
            fill="url(#EU_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="EU_svg_Mask-Copy"
            fill="url(#EU_svg_linearGradient-2)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <path
            d="M10.5,3 L9.79289322,3.20710678 L10,2.5 L9.79289322,1.79289322 L10.5,2 L11.2071068,1.79289322 L11,2.5 L11.2071068,3.20710678 L10.5,3 Z M10.5,13 L9.79289322,13.2071068 L10,12.5 L9.79289322,11.7928932 L10.5,12 L11.2071068,11.7928932 L11,12.5 L11.2071068,13.2071068 L10.5,13 Z M15.5,8 L14.7928932,8.20710678 L15,7.5 L14.7928932,6.79289322 L15.5,7 L16.2071068,6.79289322 L16,7.5 L16.2071068,8.20710678 L15.5,8 Z M5.5,8 L4.79289322,8.20710678 L5,7.5 L4.79289322,6.79289322 L5.5,7 L6.20710678,6.79289322 L6,7.5 L6.20710678,8.20710678 L5.5,8 Z M14.830127,5.5 L14.1230202,5.70710678 L14.330127,5 L14.1230202,4.29289322 L14.830127,4.5 L15.5372338,4.29289322 L15.330127,5 L15.5372338,5.70710678 L14.830127,5.5 Z M6.16987298,10.5 L5.4627662,10.7071068 L5.66987298,10 L5.4627662,9.29289322 L6.16987298,9.5 L6.87697976,9.29289322 L6.66987298,10 L6.87697976,10.7071068 L6.16987298,10.5 Z M13,3.66987298 L12.2928932,3.87697976 L12.5,3.16987298 L12.2928932,2.4627662 L13,2.66987298 L13.7071068,2.4627662 L13.5,3.16987298 L13.7071068,3.87697976 L13,3.66987298 Z M8,12.330127 L7.29289322,12.5372338 L7.5,11.830127 L7.29289322,11.1230202 L8,11.330127 L8.70710678,11.1230202 L8.5,11.830127 L8.70710678,12.5372338 L8,12.330127 Z M14.830127,10.5 L14.1230202,10.7071068 L14.330127,10 L14.1230202,9.29289322 L14.830127,9.5 L15.5372338,9.29289322 L15.330127,10 L15.5372338,10.7071068 L14.830127,10.5 Z M6.16987298,5.5 L5.4627662,5.70710678 L5.66987298,5 L5.4627662,4.29289322 L6.16987298,4.5 L6.87697976,4.29289322 L6.66987298,5 L6.87697976,5.70710678 L6.16987298,5.5 Z M13,12.330127 L12.2928932,12.5372338 L12.5,11.830127 L12.2928932,11.1230202 L13,11.330127 L13.7071068,11.1230202 L13.5,11.830127 L13.7071068,12.5372338 L13,12.330127 Z M8,3.66987298 L7.29289322,3.87697976 L7.5,3.16987298 L7.29289322,2.4627662 L8,2.66987298 L8.70710678,2.4627662 L8.5,3.16987298 L8.70710678,3.87697976 L8,3.66987298 Z"
            id="EU_svg_Star-2"
            fill="url(#EU_svg_linearGradient-3)"
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
