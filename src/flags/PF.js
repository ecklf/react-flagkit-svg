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
      <title>{"PF"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="PF_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="PF_svg_linearGradient-2"
        >
          <stop stopColor="#E02639" offset="0%" />
          <stop stopColor="#CA1A2C" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="PF_svg_linearGradient-3"
        >
          <stop stopColor="#DC2235" offset="0%" />
          <stop stopColor="#CA1A2C" offset="100%" />
        </linearGradient>
        <circle id="PF_svg_path-4" cx={2.5} cy={2.5} r={2.5} />
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="PF_svg_linearGradient-6"
        >
          <stop stopColor="#FFA135" offset="0%" />
          <stop stopColor="#FD9C2D" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="PF_svg_linearGradient-7"
        >
          <stop stopColor="#DF2034" offset="0%" />
          <stop stopColor="#CA1A2C" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="PF_svg_linearGradient-8"
        >
          <stop stopColor="#0B4BAD" offset="0%" />
          <stop stopColor="#08429A" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="PF_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="PF_svg_PF">
          <rect
            id="PF_svg_FlagBackground"
            fill="url(#PF_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="PF_svg_Rectangle-2"
            fill="url(#PF_svg_linearGradient-2)"
            x={0}
            y={0}
            width={21}
            height={4}
          />
          <rect
            id="PF_svg_Rectangle-2"
            fill="url(#PF_svg_linearGradient-3)"
            x={0}
            y={11}
            width={21}
            height={4}
          />
          <rect
            id="PF_svg_Rectangle-2"
            fill="url(#PF_svg_linearGradient-1)"
            x={0}
            y={4}
            width={21}
            height={7}
          />
          <g id="PF_svg_Group" transform="translate(8.000000, 5.000000)">
            <mask id="PF_svg_mask-5" fill="white">
              <use xlinkHref="#path-4" />
            </mask>
            <g id="PF_svg_Oval-1" />
            <rect
              id="PF_svg_Rectangle-1362"
              fill="url(#PF_svg_linearGradient-6)"
              mask="url(#PF_svg_mask-5)"
              x={0}
              y={0}
              width={5}
              height={2.5}
            />
            <polygon
              id="PF_svg_Rectangle-1364-Copy"
              fill="#FFFFFF"
              mask="url(#PF_svg_mask-5)"
              points="1 1.5 4 1.5 3.5 2.5 1.5 2.5"
            />
            <path
              d="M2,0 L3,0 L3,1.49531555 C3,1.77404508 2.76806641,2 2.5,2 C2.22385763,2 2,1.78596497 2,1.49531555 L2,0 Z M1,1 C1,1 1.75,2.5 2.5,2.5 C3.25,2.5 4,1 4,1 L4,2 C4,2.55228475 3.55733967,3 3.00104344,3 L1.99895656,3 C1.44724809,3 1,2.55613518 1,2 L1,1 Z"
              id="PF_svg_Combined-Shape"
              fill="url(#PF_svg_linearGradient-7)"
              mask="url(#PF_svg_mask-5)"
            />
            <rect
              id="PF_svg_Rectangle-1362-Copy"
              fill="url(#PF_svg_linearGradient-8)"
              mask="url(#PF_svg_mask-5)"
              x={0}
              y={3}
              width={5}
              height={2}
            />
            <polygon
              id="PF_svg_Rectangle-1364"
              fill="#FFFFFF"
              mask="url(#PF_svg_mask-5)"
              points="0 3.5 5 3.5 5 4 0 4"
            />
          </g>
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
