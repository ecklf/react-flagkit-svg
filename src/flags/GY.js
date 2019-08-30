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
      <title>{"GY"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GY_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GY_svg_linearGradient-2"
        >
          <stop stopColor="#08C55F" offset="0%" />
          <stop stopColor="#009F49" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GY_svg_linearGradient-3"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GY_svg_linearGradient-4"
        >
          <stop stopColor="#FFD831" offset="0%" />
          <stop stopColor="#FDD117" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GY_svg_linearGradient-5"
        >
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GY_svg_linearGradient-6"
        >
          <stop stopColor="#E92034" offset="0%" />
          <stop stopColor="#CE1225" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="GY_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="GY_svg_GY">
          <rect
            id="GY_svg_FlagBackground"
            fill="url(#GY_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="GY_svg_Mask"
            fill="url(#GY_svg_linearGradient-2)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <polygon
            id="GY_svg_Rectangle-1134"
            fill="url(#GY_svg_linearGradient-3)"
            fillRule="nonzero"
            points="-1 15 -1 0 0 0 21 7 21 8 0 15"
          />
          <polygon
            id="GY_svg_Rectangle-1134"
            fill="url(#GY_svg_linearGradient-4)"
            fillRule="nonzero"
            points="8.8817842e-16 1.05409255 1.99840144e-15 13.9459074 19.3377223 7.5"
          />
          <polygon
            id="GY_svg_Rectangle-1134"
            fill="url(#GY_svg_linearGradient-5)"
            fillRule="nonzero"
            points="-1 15 -1 0 0 0 11.5 7.5 0 15"
          />
          <polygon
            id="GY_svg_Rectangle-1134"
            fill="url(#GY_svg_linearGradient-6)"
            fillRule="nonzero"
            points="0 13.8061278 9.66939597 7.5 0 1.19387219"
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
