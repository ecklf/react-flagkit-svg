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
      <title>{"TL"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="TL_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="TL_svg_linearGradient-2"
        >
          <stop stopColor="#FF323E" offset="0%" />
          <stop stopColor="#FD0D1B" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="TL_svg_linearGradient-3"
        >
          <stop stopColor="#FFCC51" offset="0%" />
          <stop stopColor="#FFC63C" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="TL_svg_linearGradient-4"
        >
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="TL_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="TL_svg_TL">
          <rect
            id="TL_svg_FlagBackground"
            fill="url(#TL_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="TL_svg_Mask-Copy"
            fill="url(#TL_svg_linearGradient-2)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <polygon
            id="TL_svg_Rectangle-83"
            fill="url(#TL_svg_linearGradient-3)"
            points="0 0 13 7.5 0 15"
          />
          <polygon
            id="TL_svg_Rectangle-83"
            fill="url(#TL_svg_linearGradient-4)"
            points="0 0 9 7.5 0 15"
          />
          <polygon
            id="TL_svg_Star-8"
            fill="url(#TL_svg_linearGradient-1)"
            transform="translate(3.920454, 7.187336) rotate(-30.000000) translate(-3.920454, -7.187336) "
            points="3.92045417 8.26230472 2.61898766 9.1900867 3.09918549 7.6656181 1.81463712 6.7145503 3.41288221 6.70015886 3.92045417 5.18458466 4.42802612 6.70015886 6.02627121 6.7145503 4.74172284 7.6656181 5.22192067 9.1900867"
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
