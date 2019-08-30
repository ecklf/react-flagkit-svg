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
      <title>{"CO"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="CO_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="CO_svg_linearGradient-2"
        >
          <stop stopColor="#0748AE" offset="0%" />
          <stop stopColor="#003993" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="CO_svg_linearGradient-3"
        >
          <stop stopColor="#DE2035" offset="0%" />
          <stop stopColor="#CE1126" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="CO_svg_linearGradient-4"
        >
          <stop stopColor="#FFD935" offset="0%" />
          <stop stopColor="#FDD216" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="CO_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="CO_svg_CO">
          <rect
            id="CO_svg_FlagBackground"
            fill="url(#CO_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="CO_svg_Rectangle-2"
            fill="url(#CO_svg_linearGradient-2)"
            x={0}
            y={7}
            width={21}
            height={4}
          />
          <rect
            id="CO_svg_Rectangle-2"
            fill="url(#CO_svg_linearGradient-3)"
            x={0}
            y={11}
            width={21}
            height={4}
          />
          <rect
            id="CO_svg_Rectangle-2"
            fill="url(#CO_svg_linearGradient-4)"
            x={0}
            y={0}
            width={21}
            height={7}
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
