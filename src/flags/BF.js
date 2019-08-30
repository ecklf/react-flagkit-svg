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
      <title>{"BF"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="BF_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="BF_svg_linearGradient-2"
        >
          <stop stopColor="#00B051" offset="0%" />
          <stop stopColor="#009F49" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="BF_svg_linearGradient-3"
        >
          <stop stopColor="#FA494B" offset="0%" />
          <stop stopColor="#F02B2D" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="BF_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="BF_svg_BF">
          <rect
            id="BF_svg_FlagBackground"
            fill="url(#BF_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="BF_svg_Rectangle-2"
            fill="url(#BF_svg_linearGradient-2)"
            x={0}
            y={8}
            width={21}
            height={7}
          />
          <rect
            id="BF_svg_Rectangle-2"
            fill="url(#BF_svg_linearGradient-3)"
            x={0}
            y={0}
            width={21}
            height={8}
          />
          <polygon
            id="BF_svg_Star-8"
            fill="#FDD216"
            points="10.5 9.17000005 8.73664424 10.427051 9.38726383 8.3615499 7.64683045 7.07294902 9.81229123 7.05345008 10.5 5 11.1877088 7.05345008 13.3531695 7.07294902 11.6127362 8.3615499 12.2633558 10.427051"
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
