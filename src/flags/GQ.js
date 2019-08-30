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
      <title>{"GQ"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GQ_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GQ_svg_linearGradient-2"
        >
          <stop stopColor="#EC3938" offset="0%" />
          <stop stopColor="#E12524" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GQ_svg_linearGradient-3"
        >
          <stop stopColor="#51B422" offset="0%" />
          <stop stopColor="#429919" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GQ_svg_linearGradient-4"
        >
          <stop stopColor="#258DE7" offset="0%" />
          <stop stopColor="#1276CC" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="GQ_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="GQ_svg_GQ">
          <rect
            id="GQ_svg_FlagBackground"
            fill="url(#GQ_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="GQ_svg_Rectangle-2"
            fill="url(#GQ_svg_linearGradient-2)"
            x={0}
            y={10}
            width={21}
            height={5}
          />
          <rect
            id="GQ_svg_Rectangle-2"
            fill="url(#GQ_svg_linearGradient-3)"
            x={0}
            y={0}
            width={21}
            height={5}
          />
          <rect
            id="GQ_svg_Rectangle-2"
            fill="url(#GQ_svg_linearGradient-1)"
            x={0}
            y={5}
            width={21}
            height={5}
          />
          <path
            d="M10.0655805,8.9316864 C10.1619085,8.83134377 10.2406541,8.63517761 10.2413886,8.50667 L10.2486092,7.24333 C10.2493773,7.10894255 10.1328125,7 9.99608421,7 L9.75391579,7 C9.61368197,7 9.57846832,6.92153168 9.67418671,6.82581329 L10.3258133,6.17418671 C10.422014,6.07798604 10.5784683,6.07846832 10.6741867,6.17418671 L11.3258133,6.82581329 C11.422014,6.92201396 11.3828125,7 11.2460842,7 L11.0039158,7 C10.863682,7 10.75,7.11482239 10.75,7.24333 L10.75,8.50667 C10.75,8.64105745 10.8291016,8.82910156 10.9208984,8.92089844 L10.8291016,8.82910156 C10.9234862,8.92348616 10.8929825,9 10.7476578,9 L10.2523422,9 C10.1129775,9 10.0759368,8.92089844 10.1744174,8.8183136 L10.0655805,8.9316864 Z"
            id="GQ_svg_Rectangle-721"
            fill="#159940"
          />
          <polygon
            id="GQ_svg_Rectangle-83"
            fill="url(#GQ_svg_linearGradient-4)"
            points="0 0 7 7.5 0 15"
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
