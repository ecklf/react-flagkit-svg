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
      <title>{"MT"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="MT_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="MT_svg_linearGradient-2"
        >
          <stop stopColor="#DE233C" offset="0%" />
          <stop stopColor="#CD1931" offset="100%" />
        </linearGradient>
        <path
          d="M4,3 L4,2 L3,2 L3,3 L2,3 L2,4 L3,4 L3,5 L4,5 L4,4 L5,4 L5,3 L4,3 Z"
          id="MT_svg_path-3"
        />
      </defs>
      <g
        id="MT_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="MT_svg_MT">
          <rect
            id="MT_svg_FlagBackground"
            fill="url(#MT_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="MT_svg_Rectangle-2-Copy-2"
            fill="url(#MT_svg_linearGradient-2)"
            x={11}
            y={0}
            width={10}
            height={15}
          />
          <rect
            id="MT_svg_Rectangle-2"
            fill="url(#MT_svg_linearGradient-1)"
            x={0}
            y={0}
            width={11}
            height={15}
          />
          <g id="MT_svg_Rectangle-364">
            <use fill="#CCCCCD" fillRule="evenodd" xlinkHref="#path-3" />
            <path
              strokeOpacity={0.66}
              stroke="#7B716A"
              strokeWidth={0.5}
              d="M4.25,2.75 L5.25,2.75 L5.25,4.25 L4.25,4.25 L4.25,5.25 L2.75,5.25 L2.75,4.25 L1.75,4.25 L1.75,2.75 L2.75,2.75 L2.75,1.75 L4.25,1.75 L4.25,2.75 Z"
            />
          </g>
          <circle id="MT_svg_Oval-20" fill="#7B716A" cx={3.5} cy={3.5} r={1} />
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
