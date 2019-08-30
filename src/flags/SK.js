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
      <title>{"SK"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SK_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SK_svg_linearGradient-2"
        >
          <stop stopColor="#0C47B7" offset="0%" />
          <stop stopColor="#073DA4" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SK_svg_linearGradient-3"
        >
          <stop stopColor="#E53B35" offset="0%" />
          <stop stopColor="#D32E28" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SK_svg_linearGradient-4"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SK_svg_linearGradient-5"
        >
          <stop stopColor="#F73744" offset="0%" />
          <stop stopColor="#EC212F" offset="100%" />
        </linearGradient>
        <path
          d="M1.71148538,2.00138006 C1.73275642,1.44833313 2.19677132,1 2.75138006,1 L7.24861994,1 C7.80166687,1 8.26718351,1.44677132 8.28851462,2.00138006 L8.46148538,6.49861994 C8.48275642,7.05166687 8.16440529,7.78765261 7.74055213,8.15095532 L6.1460309,9.5176878 C5.51309551,10.0602038 4.48356295,10.0573397 3.8539691,9.5176878 L2.25944787,8.15095532 C1.84001639,7.79144262 1.51718351,7.05322868 1.53851462,6.49861994 L1.71148538,2.00138006 Z"
          id="SK_svg_path-6"
        />
      </defs>
      <g
        id="SK_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="SK_svg_SK">
          <rect
            id="SK_svg_FlagBackground"
            fill="url(#SK_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="SK_svg_Rectangle-2"
            fill="url(#SK_svg_linearGradient-2)"
            x={0}
            y={5}
            width={21}
            height={5}
          />
          <rect
            id="SK_svg_Rectangle-2"
            fill="url(#SK_svg_linearGradient-3)"
            x={0}
            y={10}
            width={21}
            height={5}
          />
          <rect
            id="SK_svg_Rectangle-2"
            fill="url(#SK_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={5}
          />
          <g
            id="SK_svg_Rectangle-1693"
            transform="translate(2.500000, 2.000000)"
          >
            <path
              d="M2.75138006,0 L7.24861994,0 C8.33946594,0 9.24581136,0.871871599 9.28777579,1.96294694 L9.46074656,6.46018681 C9.49381203,7.319889 9.04593262,8.34913554 8.3913435,8.91021192 L6.79682228,10.2769444 C5.79027065,11.1397029 4.20813771,11.1383387 3.20317772,10.2769444 L1.6086565,8.91021192 C0.956898822,8.35156248 0.506208994,7.3193425 0.539253443,6.46018681 L0.712224208,1.96294694 C0.754152499,0.872811355 1.65959323,0 2.75138006,0 Z"
              id="SK_svg_Mask"
              fill="url(#SK_svg_linearGradient-4)"
              fillRule="nonzero"
            />
            <mask id="SK_svg_mask-7" fill="white">
              <use xlinkHref="#path-6" />
            </mask>
            <use
              id="SK_svg_Mask"
              fill="url(#SK_svg_linearGradient-5)"
              xlinkHref="#path-6"
            />
            <path
              d="M4.5,6.24523926 C4.5,6.10979736 4.38229752,6 4.25230551,6 L3.24769449,6 C3.1108966,6 3,5.89298248 3,5.74765778 L3,5.25234222 C3,5.11297746 3.11770248,5 3.24769449,5 L4.25230551,5 C4.3891034,5 4.5,4.89298248 4.5,4.74765778 L4.5,4.25234222 C4.5,4.11297746 4.39298248,4 4.24765778,4 L3.75234222,4 C3.61297746,4 3.5,3.89298248 3.5,3.74765778 L3.5,3.25234222 C3.5,3.11297746 3.60701752,3 3.75234222,3 L4.24765778,3 C4.38702254,3 4.5,2.89298248 4.5,2.74765778 L4.5,2.25234222 C4.5,2.11297746 4.60701752,2 4.75234222,2 L5.24765778,2 C5.38702254,2 5.5,2.10701752 5.5,2.25234222 L5.5,2.74765778 C5.5,2.88702254 5.60701752,3 5.75234222,3 L6.24765778,3 C6.38702254,3 6.5,3.10701752 6.5,3.25234222 L6.5,3.74765778 C6.5,3.88702254 6.39298248,4 6.24765778,4 L5.75234222,4 C5.61297746,4 5.5,4.10701752 5.5,4.25234222 L5.5,4.74765778 C5.5,4.88702254 5.61770248,5 5.74769449,5 L6.75230551,5 C6.8891034,5 7,5.10701752 7,5.25234222 L7,5.74765778 C7,5.88702254 6.88229752,6 6.75230551,6 L5.74769449,6 C5.6108966,6 5.5,6.10752869 5.5,6.24523926 L5.5,7.75476074 C5.5,7.89020264 5.39298248,8 5.24765778,8 L4.75234222,8 C4.61297746,8 4.5,7.89247131 4.5,7.75476074 L4.5,6.24523926 Z"
              id="SK_svg_Rectangle-1694"
              fill="url(#SK_svg_linearGradient-1)"
              mask="url(#SK_svg_mask-7)"
            />
            <path
              d="M4.09734896,8.06908734 C2.88158614,8.26063567 2,8.82884147 2,9.5 C2,10.3284271 3.34314575,11 5,11 C6.65685425,11 8,10.3284271 8,9.5 C8,8.82884147 7.11841386,8.26063567 5.90265104,8.06908734 C5.74167981,7.73250033 5.39799159,7.5 5,7.5 C4.60200841,7.5 4.25832019,7.73250033 4.09734896,8.06908734 Z"
              id="SK_svg_Oval-215"
              fill="#1251A1"
              mask="url(#SK_svg_mask-7)"
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
