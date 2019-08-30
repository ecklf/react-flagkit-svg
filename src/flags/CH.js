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
      <title>{"CH"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="CH_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="100%"
          x2="50%"
          y2="3.061617e-15%"
          id="CH_svg_linearGradient-2"
        >
          <stop stopColor="#FF0000" offset="0%" />
          <stop stopColor="#FF3131" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="CH_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="CH_svg_CH">
          <rect
            id="CH_svg_FlagBackground"
            fill="url(#CH_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="CH_svg_Mask-Copy"
            fill="url(#CH_svg_linearGradient-2)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <path
            d="M9,9 L6.25577831,9 C6.11451585,9 6,8.88605976 6,8.74422169 L6,6.25577831 C6,6.11451585 6.11394024,6 6.25577831,6 L9,6 L9,3.25577831 C9,3.11451585 9.11394024,3 9.25577831,3 L11.7442217,3 C11.8854841,3 12,3.11394024 12,3.25577831 L12,6 L14.7442217,6 C14.8854841,6 15,6.11394024 15,6.25577831 L15,8.74422169 C15,8.88548415 14.8860598,9 14.7442217,9 L12,9 L12,11.7442217 C12,11.8854841 11.8860598,12 11.7442217,12 L9.25577831,12 C9.11451585,12 9,11.8860598 9,11.7442217 L9,9 Z"
            id="CH_svg_Combined-Shape"
            fill="url(#CH_svg_linearGradient-1)"
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
