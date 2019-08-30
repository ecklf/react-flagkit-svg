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
      <title>{"KM"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="KM_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="KM_svg_linearGradient-2"
        >
          <stop stopColor="#FFCB49" offset="0%" />
          <stop stopColor="#FFC638" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="KM_svg_linearGradient-3"
        >
          <stop stopColor="#DC1D34" offset="0%" />
          <stop stopColor="#CC162C" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="KM_svg_linearGradient-4"
        >
          <stop stopColor="#4985D4" offset="0%" />
          <stop stopColor="#3D77C2" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="KM_svg_linearGradient-5"
        >
          <stop stopColor="#4BA343" offset="0%" />
          <stop stopColor="#408D39" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="KM_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="KM_svg_KM">
          <rect
            id="KM_svg_FlagBackground"
            fill="url(#KM_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="KM_svg_Rectangle-2"
            fill="url(#KM_svg_linearGradient-2)"
            x={0}
            y={0}
            width={21}
            height={4}
          />
          <rect
            id="KM_svg_Rectangle-2"
            fill="url(#KM_svg_linearGradient-3)"
            x={0}
            y={7}
            width={21}
            height={4}
          />
          <rect
            id="KM_svg_Rectangle-2"
            fill="url(#KM_svg_linearGradient-4)"
            x={0}
            y={11}
            width={21}
            height={4}
          />
          <rect
            id="KM_svg_Rectangle-2"
            fill="url(#KM_svg_linearGradient-1)"
            x={0}
            y={4}
            width={21}
            height={3}
          />
          <polygon
            id="KM_svg_Rectangle-2"
            fill="url(#KM_svg_linearGradient-5)"
            points="0 15 10 7.5 0 0"
          />
          <path
            d="M4.75,4.59451311 C4.51028506,4.53281475 4.25897468,4.5 4,4.5 C2.34314575,4.5 1,5.84314575 1,7.5 C1,9.15685425 2.34314575,10.5 4,10.5 C4.25897468,10.5 4.51028506,10.4671852 4.75,10.4054869 C3.45607959,10.0724548 2.5,8.89787957 2.5,7.5 C2.5,6.10212043 3.45607959,4.92754521 4.75,4.59451311 Z M5.5,6 C5.22385763,6 5,5.77614237 5,5.5 C5,5.22385763 5.22385763,5 5.5,5 C5.77614237,5 6,5.22385763 6,5.5 C6,5.77614237 5.77614237,6 5.5,6 Z M5.5,8 C5.22385763,8 5,7.77614237 5,7.5 C5,7.22385763 5.22385763,7 5.5,7 C5.77614237,7 6,7.22385763 6,7.5 C6,7.77614237 5.77614237,8 5.5,8 Z M5.5,10 C5.22385763,10 5,9.77614237 5,9.5 C5,9.22385763 5.22385763,9 5.5,9 C5.77614237,9 6,9.22385763 6,9.5 C6,9.77614237 5.77614237,10 5.5,10 Z"
            id="KM_svg_Oval-12"
            fill="url(#KM_svg_linearGradient-1)"
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
