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
      <title>{"LGBT"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="LGBT_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="LGBT_svg_linearGradient-2"
        >
          <stop stopColor="#F71E24" offset="0%" />
          <stop stopColor="#FB141B" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="LGBT_svg_linearGradient-3"
        >
          <stop stopColor="#FB6C2C" offset="0%" />
          <stop stopColor="#FC6420" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="LGBT_svg_linearGradient-4"
        >
          <stop stopColor="#FDFC42" offset="0%" />
          <stop stopColor="#FFFD38" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="LGBT_svg_linearGradient-5"
        >
          <stop stopColor="#238F35" offset="0%" />
          <stop stopColor="#1C7E2C" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="LGBT_svg_linearGradient-6"
        >
          <stop stopColor="#0F62FA" offset="0%" />
          <stop stopColor="#0059FC" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="LGBT_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="LGBT_svg_LGBT">
          <rect
            id="LGBT_svg_FlagBackground"
            fill="url(#LGBT_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="LGBT_svg_Mask-Copy"
            fill="url(#LGBT_svg_linearGradient-2)"
            x={0}
            y={0}
            width={21}
            height={3}
          />
          <rect
            id="LGBT_svg_Mask-Copy-2"
            fill="url(#LGBT_svg_linearGradient-3)"
            x={0}
            y={3}
            width={21}
            height={3}
          />
          <rect
            id="LGBT_svg_Mask-Copy-3"
            fill="url(#LGBT_svg_linearGradient-4)"
            x={0}
            y={6}
            width={21}
            height={3}
          />
          <rect
            id="LGBT_svg_Mask-Copy-4"
            fill="url(#LGBT_svg_linearGradient-5)"
            x={0}
            y={9}
            width={21}
            height={3}
          />
          <rect
            id="LGBT_svg_Mask-Copy-5"
            fill="url(#LGBT_svg_linearGradient-6)"
            x={0}
            y={12}
            width={21}
            height={3}
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
