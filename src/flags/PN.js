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
      <title>{"PN"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="PN_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="PN_svg_linearGradient-2"
        >
          <stop stopColor="#07319C" offset="0%" />
          <stop stopColor="#00247E" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="PN_svg_linearGradient-3"
        >
          <stop stopColor="#1F8BDE" offset="0%" />
          <stop stopColor="#1075C2" offset="100%" />
        </linearGradient>
        <path
          d="M0,3.5 L1.54164674e-17,0.509643555 C6.90218757e-18,0.228175192 0.21484375,0 0.497698784,0 L4.50230122,0 C4.77717266,0 5,0.226606369 5,0.509643555 L5,3.5 C5,6 2.5,7 2.5,7 C2.5,7 0,6 0,3.5 Z"
          id="PN_svg_path-4"
        />
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="PN_svg_linearGradient-6"
        >
          <stop stopColor="#F7E14A" offset="0%" />
          <stop stopColor="#F7DE38" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="PN_svg_linearGradient-7"
        >
          <stop stopColor="#4B8C36" offset="0%" />
          <stop stopColor="#397127" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="PN_svg_linearGradient-8"
        >
          <stop stopColor="#DB1E36" offset="0%" />
          <stop stopColor="#D51931" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="PN_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="PN_svg_PN">
          <rect
            id="PN_svg_FlagBackground"
            fill="url(#PN_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="PN_svg_Mask-Copy"
            fill="url(#PN_svg_linearGradient-2)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <g
            id="PN_svg_Rectangle-1105"
            transform="translate(13.000000, 6.000000)"
          >
            <mask id="PN_svg_mask-5" fill="white">
              <use xlinkHref="#path-4" />
            </mask>
            <use
              id="PN_svg_Combined-Shape"
              fill="url(#PN_svg_linearGradient-3)"
              xlinkHref="#path-4"
            />
            <polygon
              id="PN_svg_Rectangle-1293"
              fill="url(#PN_svg_linearGradient-6)"
              fillRule="nonzero"
              mask="url(#PN_svg_mask-5)"
              points="-0.5 6 2.5 0 5.5 6 5.5 8 -0.5 8"
            />
            <polygon
              id="PN_svg_Rectangle-1293"
              fill="url(#PN_svg_linearGradient-7)"
              fillRule="nonzero"
              mask="url(#PN_svg_mask-5)"
              points="1.11022302e-16 6.11803399 0 7.5 5 7.5 5 6.11803399 2.5 1.11803399"
            />
          </g>
          <path
            d="M3,3.22996746 L-1.3516287,-0.5 L0.660232527,-0.5 L4.16023253,2 L4.85660189,2 L9.5,-0.902123821 L9.5,0.25 C9.5,0.552509227 9.33308555,0.876533554 9.08215972,1.05576629 L6,3.25730895 L6,3.77003254 L9.13722049,6.45907867 C9.59934261,6.85518335 9.34102897,7.5 8.75,7.5 C8.50478614,7.5 8.2052751,7.40393402 8.00092153,7.25796718 L4.83976747,5 L4.14339811,5 L-0.5,7.90212382 L-0.5,6.24269105 L3,3.74269105 L3,3.22996746 Z"
            id="PN_svg_Rectangle-36"
            fill="url(#PN_svg_linearGradient-1)"
            fillRule="nonzero"
          />
          <path
            d="M3.5,3 L-4.4408921e-16,7.10542736e-15 L0.5,7.10542736e-15 L4,2.5 L5,2.5 L9,7.10542736e-15 L9,0.25 C9,0.388071187 8.91348267,0.561798096 8.79154062,0.648899555 L5.5,3 L5.5,4 L8.8118248,6.83870697 C8.91575109,6.92778665 8.8840332,7 8.75,7 L8.75,7 C8.61192881,7 8.41348267,6.9382019 8.29154062,6.85110044 L5,4.5 L4,4.5 L-4.4408921e-16,7 L-4.4408921e-16,6.5 L3.5,4 L3.5,3 Z"
            id="PN_svg_Rectangle-36"
            fill="url(#PN_svg_linearGradient-8)"
          />
          <path
            d="M-4.4408921e-16,2.5 L-4.4408921e-16,4.5 L3.5,4.5 L3.5,7.00461102 C3.5,7.2782068 3.71403503,7.5 4.00468445,7.5 L4.99531555,7.5 C5.27404508,7.5 5.5,7.2842474 5.5,7.00461102 L5.5,4.5 L9.00952148,4.5 C9.28040529,4.5 9.5,4.28596497 9.5,3.99531555 L9.5,3.00468445 C9.5,2.72595492 9.28494263,2.5 9.00952148,2.5 L5.5,2.5 L5.5,7.10542736e-15 L3.5,7.10542736e-15 L3.5,2.5 L-4.4408921e-16,2.5 Z"
            id="PN_svg_Rectangle-2"
            fill="url(#PN_svg_linearGradient-1)"
          />
          <polygon
            id="PN_svg_Rectangle-36"
            fill="url(#PN_svg_linearGradient-8)"
            points="-4.4408921e-16 3 4 3 4 2.5 4 7.10542736e-15 5 7.10542736e-15 5 2.5 5 3 9 3 9 4 5 4 5 4.5 5 7 4 7 4 4.5 4 4 -4.4408921e-16 4"
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
