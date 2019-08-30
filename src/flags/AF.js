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
      <title>{"AF"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="AF_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="AF_svg_linearGradient-2"
        >
          <stop stopColor="#1AB11F" offset="0%" />
          <stop stopColor="#149818" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="AF_svg_linearGradient-3"
        >
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="AF_svg_linearGradient-4"
        >
          <stop stopColor="#DC0D18" offset="0%" />
          <stop stopColor="#BE0711" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="AF_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="AF_svg_AF">
          <rect
            id="AF_svg_FlagBackground"
            fill="url(#AF_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="AF_svg_Mask"
            fill="url(#AF_svg_linearGradient-2)"
            x={10}
            y={0}
            width={11}
            height={15}
          />
          <rect
            id="AF_svg_Rectangle-2"
            fill="url(#AF_svg_linearGradient-3)"
            x={0}
            y={0}
            width={7}
            height={15}
          />
          <rect
            id="AF_svg_Rectangle-2-Copy"
            fill="url(#AF_svg_linearGradient-4)"
            x={7}
            y={0}
            width={7}
            height={15}
          />
          <path
            d="M8,7 C8,7.90143048 8.48152018,8.71954992 9.24677273,9.16357911 C9.48561975,9.3021674 9.79159152,9.22089165 9.93017981,8.98204463 C10.0687681,8.74319762 9.98749235,8.43722585 9.74864534,8.29863755 C9.28867518,8.03174504 9,7.54127594 9,7 C9,6.72385763 8.77614237,6.5 8.5,6.5 C8.22385763,6.5 8,6.72385763 8,7 Z M11.8455353,9.10731545 C12.5588244,8.65111736 13,7.86294784 13,7 C13,6.72385763 12.7761424,6.5 12.5,6.5 C12.2238576,6.5 12,6.72385763 12,7 C12,7.5182519 11.7356132,7.99058439 11.3067388,8.26487951 C11.0741065,8.41366406 11.0061345,8.72286348 11.1549191,8.95549574 C11.3037036,9.188128 11.612903,9.2561 11.8455353,9.10731545 Z"
            id="AF_svg_Oval-5"
            fill="#FFFFFF"
            fillRule="nonzero"
            opacity={0.75}
          />
          <ellipse
            id="AF_svg_Oval-5"
            fillOpacity={0.5}
            fill="#FFFFFF"
            cx={10.5}
            cy={6.5}
            rx={1}
            ry={1.5}
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
