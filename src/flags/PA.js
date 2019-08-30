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
      <title>{"PA"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="PA_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="PA_svg_linearGradient-2"
        >
          <stop stopColor="#E52448" offset="0%" />
          <stop stopColor="#D01739" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="PA_svg_linearGradient-3"
        >
          <stop stopColor="#1367AE" offset="0%" />
          <stop stopColor="#0A5492" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="PA_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="PA_svg_PA">
          <rect
            id="PA_svg_FlagBackground"
            fill="url(#PA_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="PA_svg_Rectangle-2"
            fill="url(#PA_svg_linearGradient-2)"
            x={0}
            y={0}
            width={21}
            height={7}
          />
          <rect
            id="PA_svg_Rectangle-2"
            fill="url(#PA_svg_linearGradient-3)"
            x={0}
            y={7}
            width={21}
            height={8}
          />
          <path
            d="M0,7 L0,0 L10,0 L10,7 L0,7 Z M10,15 L10,7 L21,7 L21,15 L10,15 Z"
            id="PA_svg_Rectangle-2"
            fill="url(#PA_svg_linearGradient-1)"
          />
          <polygon
            id="PA_svg_Star-33"
            fill="url(#PA_svg_linearGradient-3)"
            points="5 4.31999999 3.8244295 5.11803399 4.22013366 3.75339393 3.09788697 2.88196601 4.5180161 2.83660607 5 1.5 5.4819839 2.83660607 6.90211303 2.88196601 5.77986634 3.75339393 6.1755705 5.11803399"
          />
          <polygon
            id="PA_svg_Star-33"
            fill="url(#PA_svg_linearGradient-2)"
            points="15.5 11.82 14.3244295 12.618034 14.7201337 11.2533939 13.597887 10.381966 15.0180161 10.3366061 15.5 9 15.9819839 10.3366061 17.402113 10.381966 16.2798663 11.2533939 16.6755705 12.618034"
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
