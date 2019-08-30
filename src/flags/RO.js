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
      <title>{"RO"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="RO_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="RO_svg_linearGradient-2"
        >
          <stop stopColor="#E5253D" offset="0%" />
          <stop stopColor="#CC162C" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="RO_svg_linearGradient-3"
        >
          <stop stopColor="#0A3D9C" offset="0%" />
          <stop stopColor="#042E7D" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="RO_svg_linearGradient-4"
        >
          <stop stopColor="#FFD955" offset="0%" />
          <stop stopColor="#FCD036" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="RO_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="RO_svg_RO">
          <rect
            id="RO_svg_FlagBackground"
            fill="url(#RO_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="RO_svg_Mask"
            fill="url(#RO_svg_linearGradient-2)"
            x={10}
            y={0}
            width={11}
            height={15}
          />
          <rect
            id="RO_svg_Rectangle-2"
            fill="url(#RO_svg_linearGradient-3)"
            x={0}
            y={0}
            width={7}
            height={15}
          />
          <rect
            id="RO_svg_Rectangle-2-Copy"
            fill="url(#RO_svg_linearGradient-4)"
            x={7}
            y={0}
            width={7}
            height={15}
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
