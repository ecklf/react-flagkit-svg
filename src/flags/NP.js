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
      <title>{"NP"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="NP_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <path
          d="M0,4.52970994e-14 L1.49531555,1.44969983e-09 C1.77404508,1.71991806e-09 2.18849134,0.125660898 2.41306716,0.27537811 L13.1751914,7.4501276 C13.6307206,7.75381374 13.5469637,8 13.0029699,8 L6,8 L13.2473794,14.341457 C13.6630403,14.7051603 13.5500512,15 12.9931545,15 L0,15 L0,4.52970994e-14 Z"
          id="NP_svg_path-2"
        />
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="NP_svg_linearGradient-4"
        >
          <stop stopColor="#EE1B44" offset="0%" />
          <stop stopColor="#DD153C" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="NP_svg_linearGradient-5"
        >
          <stop stopColor="#0543A8" offset="0%" />
          <stop stopColor="#003893" offset="100%" />
        </linearGradient>
        <path
          d="M0,0 L1.49531555,0 C1.77404508,0 2.18849134,0.125660896 2.41306716,0.275378108 L13.1751914,7.4501276 C13.6307206,7.75381374 13.5469637,8 13.0029699,8 L6,8 L13.2473794,14.341457 C13.6630403,14.7051603 13.5500512,15 12.9931545,15 L0,15 L0,0 Z"
          id="NP_svg_path-6"
        />
      </defs>
      <g
        id="NP_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="NP_svg_NP">
          <mask id="NP_svg_mask-3" fill="white">
            <use xlinkHref="#path-2" />
          </mask>
          <use
            id="NP_svg_Mask"
            fill="url(#NP_svg_linearGradient-1)"
            xlinkHref="#path-2"
          />
          <g id="NP_svg_Mask-Copy" mask="url(#NP_svg_mask-3)">
            <use
              fill="url(#NP_svg_linearGradient-4)"
              fillRule="evenodd"
              xlinkHref="#path-6"
            />
            <path
              stroke="url(#NP_svg_linearGradient-5)"
              strokeWidth={1}
              d="M0.5,0.5 L0.5,14.5 L12.6692753,14.5 L4.6692753,7.5 L12.3486122,7.5 L2.13571706,0.691403255 C1.9922793,0.59577808 1.67411734,0.5 1.49531555,0.5 L0.5,0.5 Z"
            />
          </g>
          <path
            d="M5.13831521,5.85057555 C5.42639761,5.77162618 5.69198348,5.66364925 5.92688132,5.53210575 C5.69389395,6.37838213 4.9187606,7 3.99844063,7 C3.07812065,7 2.3029873,6.37838213 2.06999993,5.53210575 C2.30554809,5.66401343 2.57195443,5.77222387 2.86095923,5.85123059 L3.25,5.5 L2.6141807,4.92597485 L3.46966991,4.96966991 L3.42597485,4.1141807 L4,4.75 L4.57402515,4.1141807 L4.53033009,4.96966991 L5.3858193,4.92597485 L4.75,5.5 L5.13831521,5.85057555 L5.13831521,5.85057555 Z M4,12 L3.23463314,12.8477591 L3.29289322,11.7071068 L2.15224093,11.7653669 L3,11 L2.15224093,10.2346331 L3.29289322,10.2928932 L3.23463314,9.15224093 L4,10 L4.76536686,9.15224093 L4.70710678,10.2928932 L5.84775907,10.2346331 L5,11 L5.84775907,11.7653669 L4.70710678,11.7071068 L4.76536686,12.8477591 L4,12 Z"
            id="NP_svg_Star-93"
            fill="url(#NP_svg_linearGradient-1)"
            mask="url(#NP_svg_mask-3)"
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
