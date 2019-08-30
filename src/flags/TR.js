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
      <title>{"TR"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="TR_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="TR_svg_linearGradient-2"
        >
          <stop stopColor="#E92434" offset="0%" />
          <stop stopColor="#E11324" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="TR_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="TR_svg_TR">
          <rect
            id="TR_svg_FlagBackground"
            fill="url(#TR_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="TR_svg_Mask-Copy"
            fill="url(#TR_svg_linearGradient-2)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <path
            d="M13.052071,4.73691441 C12.4166497,4.27508353 11.6177441,4 10.75,4 C8.67893219,4 7,5.56700338 7,7.5 C7,9.43299662 8.67893219,11 10.75,11 C11.6177441,11 12.4166497,10.7249165 13.052071,10.2630856 C12.228638,11.3201293 10.9437152,12 9.5,12 C7.01471863,12 5,9.98528137 5,7.5 C5,5.01471863 7.01471863,3 9.5,3 C10.9437152,3 12.228638,3.67987067 13.052071,4.73691441 Z M14.2656441,8.07626735 L13.3470294,9.19000603 L13.4096022,7.74766364 L12.0665062,7.21817326 L13.4575914,6.83197525 L13.5461272,5.39099352 L14.3432923,6.59465241 L15.7411064,6.2335671 L14.8426963,7.36366722 L15.6180572,8.58148596 L14.2656441,8.07626735 Z"
            id="TR_svg_Combined-Shape"
            fill="url(#TR_svg_linearGradient-1)"
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
