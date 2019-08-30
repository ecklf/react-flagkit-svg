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
      <title>{"MA"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="MA_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="MA_svg_linearGradient-2"
        >
          <stop stopColor="#E33B44" offset="0%" />
          <stop stopColor="#C02A32" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="MA_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="MA_svg_MA">
          <rect
            id="MA_svg_FlagBackground"
            fill="url(#MA_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="MA_svg_Mask-Copy"
            fill="url(#MA_svg_linearGradient-2)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <path
            d="M10.5,9.25500007 L7.85496636,11.1405765 L8.83089575,8.04232485 L6.22024568,6.10942353 L9.46843684,6.08017512 L10.5,3 L11.5315632,6.08017512 L14.7797543,6.10942353 L12.1691043,8.04232485 L13.1450336,11.1405765 L10.5,9.25500007 Z M10.5,8.02691631 L11.2941375,8.5930365 L11.0011272,7.6628261 L11.7849415,7.08249721 L10.8097136,7.07371575 L10.5,6.14893259 L10.1902864,7.07371575 L9.21505853,7.08249721 L9.99887281,7.6628261 L9.7058625,8.5930365 L10.5,8.02691631 Z"
            id="MA_svg_Star-8"
            fill="#0A6135"
            fillRule="nonzero"
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
