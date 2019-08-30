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
      <title>{"GB-SCT"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GBSCT_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GBSCT_svg_linearGradient-2"
        >
          <stop stopColor="#1479D0" offset="0%" />
          <stop stopColor="#0A68BA" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="GBSCT_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="GBSCT_svg_GB-SCT">
          <rect
            id="GBSCT_svg_FlagBackground"
            fill="url(#GBSCT_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="GBSCT_svg_Mask-Copy"
            fill="url(#GBSCT_svg_linearGradient-2)"
            x={0.000237781813}
            y={-0.00266538434}
            width={21}
            height={15}
          />
          <path
            d="M10.5002378,6.29111667 L-0.961614117,-1.44000006 L-2.07999992,0.218075088 L8.71194613,7.49733462 L-2.07999992,14.7765941 L-0.961614117,16.4346693 L10.5002378,8.70355256 L21.9620897,16.4346693 L23.0804755,14.7765941 L12.2885294,7.49733462 L23.0804755,0.218075088 L21.9620897,-1.44000006 L10.5002378,6.29111667 Z"
            id="GBSCT_svg_Rectangle-2"
            fill="url(#GBSCT_svg_linearGradient-1)"
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
