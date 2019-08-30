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
      <title>{"AU"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="AU_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="AU_svg_linearGradient-2"
        >
          <stop stopColor="#0A17A7" offset="0%" />
          <stop stopColor="#030E88" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="AU_svg_linearGradient-3"
        >
          <stop stopColor="#DB1E36" offset="0%" />
          <stop stopColor="#D51931" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="AU_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="AU_svg_AU">
          <rect
            id="AU_svg_FlagBackground"
            fill="url(#AU_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="AU_svg_Mask-Copy"
            fill="url(#AU_svg_linearGradient-2)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <path
            d="M3,3.22996746 L-1.3516287,-0.5 L0.660232527,-0.5 L4.16023253,2 L4.85660189,2 L9.5,-0.902123821 L9.5,0.25 C9.5,0.552509227 9.33308555,0.876533554 9.08215972,1.05576629 L6,3.25730895 L6,3.77003254 L9.13722049,6.45907867 C9.59934261,6.85518335 9.34102897,7.5 8.75,7.5 C8.50478614,7.5 8.2052751,7.40393402 8.00092153,7.25796718 L4.83976747,5 L4.14339811,5 L-0.5,7.90212382 L-0.5,6.24269105 L3,3.74269105 L3,3.22996746 Z"
            id="AU_svg_Rectangle-36"
            fill="url(#AU_svg_linearGradient-1)"
            fillRule="nonzero"
          />
          <path
            d="M3.5,3 L-4.4408921e-16,-2.13162821e-14 L0.5,-2.13162821e-14 L4,2.5 L5,2.5 L9,-2.13162821e-14 L9,0.25 C9,0.388071187 8.91348267,0.561798096 8.79154062,0.648899555 L5.5,3 L5.5,4 L8.8118248,6.83870697 C8.91575109,6.92778665 8.8840332,7 8.75,7 L8.75,7 C8.61192881,7 8.41348267,6.9382019 8.29154062,6.85110044 L5,4.5 L4,4.5 L-4.4408921e-16,7 L-4.4408921e-16,6.5 L3.5,4 L3.5,3 Z"
            id="AU_svg_Rectangle-36"
            fill="url(#AU_svg_linearGradient-3)"
          />
          <path
            d="M-4.4408921e-16,2.5 L-4.4408921e-16,4.5 L3.5,4.5 L3.5,7.00461102 C3.5,7.2782068 3.71403503,7.5 4.00468445,7.5 L4.99531555,7.5 C5.27404508,7.5 5.5,7.2842474 5.5,7.00461102 L5.5,4.5 L9.00952148,4.5 C9.28040529,4.5 9.5,4.28596497 9.5,3.99531555 L9.5,3.00468445 C9.5,2.72595492 9.28494263,2.5 9.00952148,2.5 L5.5,2.5 L5.5,-2.13162821e-14 L3.5,-2.13162821e-14 L3.5,2.5 L-4.4408921e-16,2.5 Z"
            id="AU_svg_Rectangle-2"
            fill="url(#AU_svg_linearGradient-1)"
          />
          <polygon
            id="AU_svg_Rectangle-36"
            fill="url(#AU_svg_linearGradient-3)"
            points="-4.4408921e-16 3 4 3 4 2.5 4 -2.13162821e-14 5 -2.13162821e-14 5 2.5 5 3 9 3 9 4 5 4 5 4.5 5 7 4 7 4 4.5 4 4 -4.4408921e-16 4"
          />
          <polygon
            id="AU_svg_Star-2"
            fill="#FFFFFF"
            points="4.5 12.25 3.61832212 12.7135255 3.78670761 11.7317627 3.07341523 11.0364745 4.05916106 10.8932373 4.5 10 4.94083894 10.8932373 5.92658477 11.0364745 5.21329239 11.7317627 5.38167788 12.7135255"
          />
          <polygon
            id="AU_svg_Star-2"
            fill="#FFFFFF"
            points="15 13 14.2928932 13.2071068 14.5 12.5 14.2928932 11.7928932 15 12 15.7071068 11.7928932 15.5 12.5 15.7071068 13.2071068"
          />
          <polygon
            id="AU_svg_Star-2"
            fill="#FFFFFF"
            points="15 3.5 14.2928932 3.70710678 14.5 3 14.2928932 2.29289322 15 2.5 15.7071068 2.29289322 15.5 3 15.7071068 3.70710678"
          />
          <polygon
            id="AU_svg_Star-2"
            fill="#FFFFFF"
            points="18 6.5 17.2928932 6.70710678 17.5 6 17.2928932 5.29289322 18 5.5 18.7071068 5.29289322 18.5 6 18.7071068 6.70710678"
          />
          <polygon
            id="AU_svg_Star-2"
            fill="#FFFFFF"
            points="12 7.5 11.2928932 7.70710678 11.5 7 11.2928932 6.29289322 12 6.5 12.7071068 6.29289322 12.5 7 12.7071068 7.70710678"
          />
          <polygon
            id="AU_svg_Star-2"
            fill="#FFFFFF"
            points="16.5 8.75 16.1464466 8.85355339 16.25 8.5 16.1464466 8.14644661 16.5 8.25 16.8535534 8.14644661 16.75 8.5 16.8535534 8.85355339"
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
