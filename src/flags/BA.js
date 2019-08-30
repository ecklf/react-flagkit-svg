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
      <title>{"BA"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="BA_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="BA_svg_linearGradient-2"
        >
          <stop stopColor="#0B36B2" offset="0%" />
          <stop stopColor="#042993" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="BA_svg_linearGradient-3"
        >
          <stop stopColor="#FFD045" offset="0%" />
          <stop stopColor="#FECA2F" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="BA_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="BA_svg_BA">
          <rect
            id="BA_svg_FlagBackground"
            fill="url(#BA_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="BA_svg_Mask-Copy"
            fill="url(#BA_svg_linearGradient-2)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <polygon
            id="BA_svg_Rectangle-2"
            fill="url(#BA_svg_linearGradient-3)"
            points="17 15 17 0 6.5 0"
          />
          <polygon
            id="BA_svg_Star-2"
            fill="url(#BA_svg_linearGradient-1)"
            points="13 14 12.2928932 14.2071068 12.5 13.5 12.2928932 12.7928932 13 13 13.7071068 12.7928932 13.5 13.5 13.7071068 14.2071068"
          />
          <polygon
            id="BA_svg_Star-2"
            fill="url(#BA_svg_linearGradient-1)"
            points="11 11 10.2928932 11.2071068 10.5 10.5 10.2928932 9.79289322 11 10 11.7071068 9.79289322 11.5 10.5 11.7071068 11.2071068"
          />
          <polygon
            id="BA_svg_Star-2"
            fill="url(#BA_svg_linearGradient-1)"
            points="9 8 8.29289322 8.20710678 8.5 7.5 8.29289322 6.79289322 9 7 9.70710678 6.79289322 9.5 7.5 9.70710678 8.20710678"
          />
          <polygon
            id="BA_svg_Star-2"
            fill="url(#BA_svg_linearGradient-1)"
            points="7 5 6.29289322 5.20710678 6.5 4.5 6.29289322 3.79289322 7 4 7.70710678 3.79289322 7.5 4.5 7.70710678 5.20710678"
          />
          <polygon
            id="BA_svg_Star-2"
            fill="url(#BA_svg_linearGradient-1)"
            points="5 2 4.29289322 2.20710678 4.5 1.5 4.29289322 0.792893219 5 1 5.70710678 0.792893219 5.5 1.5 5.70710678 2.20710678"
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
