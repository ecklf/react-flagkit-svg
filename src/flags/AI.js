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
      <title>{"AI"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="AI_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="AI_svg_linearGradient-2"
        >
          <stop stopColor="#0A17A7" offset="0%" />
          <stop stopColor="#030E88" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="AI_svg_linearGradient-3"
        >
          <stop stopColor="#DB1E36" offset="0%" />
          <stop stopColor="#D51931" offset="100%" />
        </linearGradient>
        <path
          d="M0,2.5 L0,0 L1,0.5 L2,0 L3,0.5 L4,0 L4,2.5 C4,4 2,5 2,5 C2,5 0,4 0,2.5 Z"
          id="AI_svg_path-4"
        />
        <filter
          x="-6.2%"
          y="-5.0%"
          width="112.5%"
          height="120.0%"
          filterUnits="objectBoundingBox"
          id="AI_svg_filter-6"
        >
          <feOffset
            dx={0}
            dy={0.5}
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.06 0"
            type="matrix"
            in="shadowOffsetOuter1"
          />
        </filter>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="AI_svg_linearGradient-7"
        >
          <stop stopColor="#FFA51B" offset="0%" />
          <stop stopColor="#FF9A00" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="AI_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="AI_svg_AI">
          <rect
            id="AI_svg_FlagBackground"
            fill="url(#AI_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="AI_svg_Mask-Copy"
            fill="url(#AI_svg_linearGradient-2)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <path
            d="M3,3.22996746 L-1.3516287,-0.5 L0.660232527,-0.5 L4.16023253,2 L4.85660189,2 L9.5,-0.902123821 L9.5,0.25 C9.5,0.552509227 9.33308555,0.876533554 9.08215972,1.05576629 L6,3.25730895 L6,3.77003254 L9.13722049,6.45907867 C9.59934261,6.85518335 9.34102897,7.5 8.75,7.5 C8.50478614,7.5 8.2052751,7.40393402 8.00092153,7.25796718 L4.83976747,5 L4.14339811,5 L-0.5,7.90212382 L-0.5,6.24269105 L3,3.74269105 L3,3.22996746 Z"
            id="AI_svg_Rectangle-36"
            fill="url(#AI_svg_linearGradient-1)"
            fillRule="nonzero"
          />
          <path
            d="M3.5,3 L-4.4408921e-16,7.10542736e-15 L0.5,7.10542736e-15 L4,2.5 L5,2.5 L9,7.10542736e-15 L9,0.25 C9,0.388071187 8.91348267,0.561798096 8.79154062,0.648899555 L5.5,3 L5.5,4 L8.8118248,6.83870697 C8.91575109,6.92778665 8.8840332,7 8.75,7 L8.75,7 C8.61192881,7 8.41348267,6.9382019 8.29154062,6.85110044 L5,4.5 L4,4.5 L-4.4408921e-16,7 L-4.4408921e-16,6.5 L3.5,4 L3.5,3 Z"
            id="AI_svg_Rectangle-36"
            fill="url(#AI_svg_linearGradient-3)"
          />
          <path
            d="M-4.4408921e-16,2.5 L-4.4408921e-16,4.5 L3.5,4.5 L3.5,7.00461102 C3.5,7.2782068 3.71403503,7.5 4.00468445,7.5 L4.99531555,7.5 C5.27404508,7.5 5.5,7.2842474 5.5,7.00461102 L5.5,4.5 L9.00952148,4.5 C9.28040529,4.5 9.5,4.28596497 9.5,3.99531555 L9.5,3.00468445 C9.5,2.72595492 9.28494263,2.5 9.00952148,2.5 L5.5,2.5 L5.5,7.10542736e-15 L3.5,7.10542736e-15 L3.5,2.5 L-4.4408921e-16,2.5 Z"
            id="AI_svg_Rectangle-2"
            fill="url(#AI_svg_linearGradient-1)"
          />
          <polygon
            id="AI_svg_Rectangle-36"
            fill="url(#AI_svg_linearGradient-3)"
            points="-4.4408921e-16 3 4 3 4 2.5 4 7.10542736e-15 5 7.10542736e-15 5 2.5 5 3 9 3 9 4 5 4 5 4.5 5 7 4 7 4 4.5 4 4 -4.4408921e-16 4"
          />
          <g
            id="AI_svg_Rectangle-1105"
            transform="translate(13.000000, 5.000000)"
          >
            <mask id="AI_svg_mask-5" fill="white">
              <use xlinkHref="#path-4" />
            </mask>
            <g id="AI_svg_Mask">
              <use
                fill="black"
                fillOpacity={1}
                filter="url(#AI_svg_filter-6)"
                xlinkHref="#path-4"
              />
              <use
                fill="url(#AI_svg_linearGradient-1)"
                fillRule="evenodd"
                xlinkHref="#path-4"
              />
            </g>
            <rect
              id="AI_svg_Rectangle-1106"
              fill="#9ACCFF"
              mask="url(#AI_svg_mask-5)"
              x={0}
              y={4}
              width={4}
              height={1}
            />
            <path
              d="M2,2 C1.72385763,2 1.5,1.77614237 1.5,1.5 C1.5,1.22385763 1.72385763,1 2,1 C2.27614237,1 2.5,1.22385763 2.5,1.5 C2.5,1.77614237 2.27614237,2 2,2 Z M1,3 C0.723857625,3 0.5,2.77614237 0.5,2.5 C0.5,2.22385763 0.723857625,2 1,2 C1.27614237,2 1.5,2.22385763 1.5,2.5 C1.5,2.77614237 1.27614237,3 1,3 Z M3,3 C2.72385763,3 2.5,2.77614237 2.5,2.5 C2.5,2.22385763 2.72385763,2 3,2 C3.27614237,2 3.5,2.22385763 3.5,2.5 C3.5,2.77614237 3.27614237,3 3,3 Z"
              id="AI_svg_Oval-170"
              fill="url(#AI_svg_linearGradient-7)"
              mask="url(#AI_svg_mask-5)"
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
