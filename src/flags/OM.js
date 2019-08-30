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
      <title>{"OM"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="OM_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="OM_svg_linearGradient-2"
        >
          <stop stopColor="#138E16" offset="0%" />
          <stop stopColor="#0F7F12" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="OM_svg_linearGradient-3"
        >
          <stop stopColor="#ED2B35" offset="0%" />
          <stop stopColor="#D91B25" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="OM_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="OM_svg_OM">
          <rect
            id="OM_svg_FlagBackground"
            fill="url(#OM_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="OM_svg_Rectangle-2"
            fill="url(#OM_svg_linearGradient-2)"
            x={0}
            y={10}
            width={21}
            height={5}
          />
          <polygon
            id="OM_svg_Rectangle-2"
            fill="url(#OM_svg_linearGradient-3)"
            points="0 15 7 15 7 10 21 10 21 5 7 5 7 0 0 0"
          />
          <polygon
            id="OM_svg_Star-32"
            fill="url(#OM_svg_linearGradient-1)"
            points="3.5 3.53381849 2.63223252 4.80193774 3.0826439 3.33283039 1.55014418 3.44504187 2.97956545 2.88121421 1.93633704 1.7530204 3.26838484 2.51904616 3.5 1 3.73161516 2.51904616 5.06366296 1.7530204 4.02043455 2.88121421 5.44985582 3.44504187 3.9173561 3.33283039 4.36776748 4.80193774"
          />
          <rect
            id="OM_svg_Rectangle-2"
            fill="url(#OM_svg_linearGradient-1)"
            x={7}
            y={0}
            width={14}
            height={5}
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
