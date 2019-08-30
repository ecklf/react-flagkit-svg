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
      <title>{"CM"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="CM_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="CM_svg_linearGradient-2"
        >
          <stop stopColor="#FFDC44" offset="0%" />
          <stop stopColor="#FDD216" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="CM_svg_linearGradient-3"
        >
          <stop stopColor="#059170" offset="0%" />
          <stop stopColor="#007B5E" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="CM_svg_linearGradient-4"
        >
          <stop stopColor="#E21A30" offset="0%" />
          <stop stopColor="#CE1126" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="CM_svg_linearGradient-5"
        >
          <stop stopColor="#FFDC42" offset="0%" />
          <stop stopColor="#FDD217" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="CM_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="CM_svg_CM">
          <rect
            id="CM_svg_FlagBackground"
            fill="url(#CM_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="CM_svg_Mask"
            fill="url(#CM_svg_linearGradient-2)"
            x={10}
            y={0}
            width={11}
            height={15}
          />
          <rect
            id="CM_svg_Rectangle-2"
            fill="url(#CM_svg_linearGradient-3)"
            x={0}
            y={0}
            width={7}
            height={15}
          />
          <rect
            id="CM_svg_Rectangle-2-Copy"
            fill="url(#CM_svg_linearGradient-4)"
            x={7}
            y={0}
            width={7}
            height={15}
          />
          <rect
            id="CM_svg_Rectangle-2-Copy-2"
            fill="url(#CM_svg_linearGradient-2)"
            x={14}
            y={0}
            width={7}
            height={15}
          />
          <polygon
            id="CM_svg_Star-8"
            fill="url(#CM_svg_linearGradient-5)"
            points="10.5 8.47500004 9.03053687 9.52254249 9.57271986 7.80129158 8.12235871 6.72745751 9.92690936 6.7112084 10.5 5 11.0730906 6.7112084 12.8776413 6.72745751 11.4272801 7.80129158 11.9694631 9.52254249"
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
