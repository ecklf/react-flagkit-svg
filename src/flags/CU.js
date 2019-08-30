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
      <title>{"CU"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="CU_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="CU_svg_linearGradient-2"
        >
          <stop stopColor="#0B389F" offset="0%" />
          <stop stopColor="#052E8D" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="CU_svg_linearGradient-3"
        >
          <stop stopColor="#E12A43" offset="0%" />
          <stop stopColor="#CD1931" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="CU_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="CU_svg_CU">
          <rect
            id="CU_svg_FlagBackground"
            fill="url(#CU_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="CU_svg_Rectangle-2"
            fill="url(#CU_svg_linearGradient-2)"
            x={0}
            y={0}
            width={21}
            height={3}
          />
          <rect
            id="CU_svg_Rectangle-2"
            fill="url(#CU_svg_linearGradient-2)"
            x={0}
            y={6}
            width={21}
            height={3}
          />
          <rect
            id="CU_svg_Rectangle-2"
            fill="url(#CU_svg_linearGradient-1)"
            x={0}
            y={3}
            width={21}
            height={3}
          />
          <rect
            id="CU_svg_Rectangle-2"
            fill="url(#CU_svg_linearGradient-2)"
            x={0}
            y={12}
            width={21}
            height={3}
          />
          <rect
            id="CU_svg_Rectangle-2"
            fill="url(#CU_svg_linearGradient-1)"
            x={0}
            y={9}
            width={21}
            height={3}
          />
          <polygon
            id="CU_svg_Rectangle-83"
            fill="url(#CU_svg_linearGradient-3)"
            points="0 0 10 7.5 0 15"
          />
          <polygon
            id="CU_svg_Star-53"
            fill="url(#CU_svg_linearGradient-1)"
            points="3.5 8.26701627 2.3244295 9.11803399 2.77052418 7.73702106 1.59788697 6.88196601 3.04915915 6.8794708 3.5 5.5 3.95084085 6.8794708 5.40211303 6.88196601 4.22947582 7.73702106 4.6755705 9.11803399"
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
