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
      <title>{"TV"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="TV_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="TV_svg_linearGradient-2"
        >
          <stop stopColor="#72AFC8" offset="0%" />
          <stop stopColor="#5D98B0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="TV_svg_linearGradient-3"
        >
          <stop stopColor="#0A17A7" offset="0%" />
          <stop stopColor="#030E88" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="TV_svg_linearGradient-4"
        >
          <stop stopColor="#DB1E36" offset="0%" />
          <stop stopColor="#D51931" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="TV_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="TV_svg_TV">
          <rect
            id="TV_svg_FlagBackground"
            fill="url(#TV_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="TV_svg_Mask-Copy"
            fill="url(#TV_svg_linearGradient-2)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <path
            d="M9,13 L8.29289322,13.2071068 L8.5,12.5 L8.29289322,11.7928932 L9,12 L9.70710678,11.7928932 L9.5,12.5 L9.70710678,13.2071068 L9,13 Z M12,12 L11.2928932,12.2071068 L11.5,11.5 L11.2928932,10.7928932 L12,11 L12.7071068,10.7928932 L12.5,11.5 L12.7071068,12.2071068 L12,12 Z M15,12 L14.2928932,12.2071068 L14.5,11.5 L14.2928932,10.7928932 L15,11 L15.7071068,10.7928932 L15.5,11.5 L15.7071068,12.2071068 L15,12 Z M17,10 L16.2928932,10.2071068 L16.5,9.5 L16.2928932,8.79289322 L17,9 L17.7071068,8.79289322 L17.5,9.5 L17.7071068,10.2071068 L17,10 Z M19,8 L18.2928932,8.20710678 L18.5,7.5 L18.2928932,6.79289322 L19,7 L19.7071068,6.79289322 L19.5,7.5 L19.7071068,8.20710678 L19,8 Z M13,9 L12.2928932,9.20710678 L12.5,8.5 L12.2928932,7.79289322 L13,8 L13.7071068,7.79289322 L13.5,8.5 L13.7071068,9.20710678 L13,9 Z M15,5 L14.2928932,5.20710678 L14.5,4.5 L14.2928932,3.79289322 L15,4 L15.7071068,3.79289322 L15.5,4.5 L15.7071068,5.20710678 L15,5 Z M17,4 L16.2928932,4.20710678 L16.5,3.5 L16.2928932,2.79289322 L17,3 L17.7071068,2.79289322 L17.5,3.5 L17.7071068,4.20710678 L17,4 Z M19,3 L18.2928932,3.20710678 L18.5,2.5 L18.2928932,1.79289322 L19,2 L19.7071068,1.79289322 L19.5,2.5 L19.7071068,3.20710678 L19,3 Z"
            id="TV_svg_Combined-Shape"
            fill="#FFCD2F"
          />
          <rect
            id="TV_svg_Mask-Copy-2"
            fill="url(#TV_svg_linearGradient-3)"
            x={0}
            y={0}
            width={9}
            height={7}
          />
          <path
            d="M3,3.22996746 L-1.3516287,-0.5 L0.660232527,-0.5 L4.16023253,2 L4.85660189,2 L9.5,-0.902123821 L9.5,0.25 C9.5,0.552509227 9.33308555,0.876533554 9.08215972,1.05576629 L6,3.25730895 L6,3.77003254 L9.13722049,6.45907867 C9.59934261,6.85518335 9.34102897,7.5 8.75,7.5 C8.50478614,7.5 8.2052751,7.40393402 8.00092153,7.25796718 L4.83976747,5 L4.14339811,5 L-0.5,7.90212382 L-0.5,6.24269105 L3,3.74269105 L3,3.22996746 Z"
            id="TV_svg_Rectangle-36"
            fill="url(#TV_svg_linearGradient-1)"
            fillRule="nonzero"
          />
          <path
            d="M3.5,3 L-4.4408921e-16,-2.13162821e-14 L0.5,-2.13162821e-14 L4,2.5 L5,2.5 L9,-2.13162821e-14 L9,0.25 C9,0.388071187 8.91348267,0.561798096 8.79154062,0.648899555 L5.5,3 L5.5,4 L8.8118248,6.83870697 C8.91575109,6.92778665 8.8840332,7 8.75,7 L8.75,7 C8.61192881,7 8.41348267,6.9382019 8.29154062,6.85110044 L5,4.5 L4,4.5 L-4.4408921e-16,7 L-4.4408921e-16,6.5 L3.5,4 L3.5,3 Z"
            id="TV_svg_Rectangle-36"
            fill="url(#TV_svg_linearGradient-4)"
          />
          <path
            d="M-4.4408921e-16,2.5 L-4.4408921e-16,4.5 L3.5,4.5 L3.5,7.00461102 C3.5,7.2782068 3.71403503,7.5 4.00468445,7.5 L4.99531555,7.5 C5.27404508,7.5 5.5,7.2842474 5.5,7.00461102 L5.5,4.5 L9.00952148,4.5 C9.28040529,4.5 9.5,4.28596497 9.5,3.99531555 L9.5,3.00468445 C9.5,2.72595492 9.28494263,2.5 9.00952148,2.5 L5.5,2.5 L5.5,-2.13162821e-14 L3.5,-2.13162821e-14 L3.5,2.5 L-4.4408921e-16,2.5 Z"
            id="TV_svg_Rectangle-2"
            fill="url(#TV_svg_linearGradient-1)"
          />
          <polygon
            id="TV_svg_Rectangle-36"
            fill="url(#TV_svg_linearGradient-4)"
            points="-4.4408921e-16 3 4 3 4 2.5 4 -2.13162821e-14 5 -2.13162821e-14 5 2.5 5 3 9 3 9 4 5 4 5 4.5 5 7 4 7 4 4.5 4 4 -4.4408921e-16 4"
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
