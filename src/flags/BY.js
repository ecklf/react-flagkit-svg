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
      <title>{"BY"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="BY_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="BY_svg_linearGradient-2"
        >
          <stop stopColor="#E54252" offset="0%" />
          <stop stopColor="#C63442" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="BY_svg_linearGradient-3"
        >
          <stop stopColor="#5CBE6B" offset="0%" />
          <stop stopColor="#4EA55B" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="BY_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="BY_svg_BY">
          <rect
            id="BY_svg_FlagBackground"
            fill="url(#BY_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="BY_svg_Rectangle-2"
            fill="url(#BY_svg_linearGradient-2)"
            x={0}
            y={0}
            width={21}
            height={10}
          />
          <rect
            id="BY_svg_Rectangle-2"
            fill="url(#BY_svg_linearGradient-3)"
            x={0}
            y={10}
            width={21}
            height={5}
          />
          <path
            d="M3,12.75 L3,15 L2.22044605e-16,15 L2.22044605e-16,0 L3,0 L3,2.25 L2.5,3 L3,3.75 L3,5.25 L2.5,6 L3,6.75 L3,8.25 L2.5,9 L3,9.75 L3,11.25 L2.5,12 L3,12.75 Z"
            id="BY_svg_Rectangle-1512"
            fill="url(#BY_svg_linearGradient-1)"
          />
          <path
            d="M-1.5,3 L-0.5,1.5 L0.5,3 L-0.5,4.5 L-1.5,3 Z M-1.5,6 L-0.5,4.5 L0.5,6 L-0.5,7.5 L-1.5,6 Z M-1.5,9 L-0.5,7.5 L0.5,9 L-0.5,10.5 L-1.5,9 Z M-1.5,12 L-0.5,10.5 L0.5,12 L-0.5,13.5 L-1.5,12 Z"
            id="BY_svg_Rectangle-1513"
            fill="url(#BY_svg_linearGradient-2)"
          />
          <path
            d="M0.5,1.5 L1.5,0 L2.5,1.5 L1.5,3 L0.5,1.5 Z M0.5,4.5 L1.5,3 L2.5,4.5 L1.5,6 L0.5,4.5 Z M0.5,7.5 L1.5,6 L2.5,7.5 L1.5,9 L0.5,7.5 Z M0.5,10.5 L1.5,9 L2.5,10.5 L1.5,12 L0.5,10.5 Z M0.5,13.5 L1.5,12 L2.5,13.5 L1.5,15 L0.5,13.5 Z"
            id="BY_svg_Rectangle-1513"
            fill="url(#BY_svg_linearGradient-2)"
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
