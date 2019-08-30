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
      <title>{"TC"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="TC_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="TC_svg_linearGradient-2"
        >
          <stop stopColor="#07319C" offset="0%" />
          <stop stopColor="#00247E" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="TC_svg_linearGradient-3"
        >
          <stop stopColor="#FFD033" offset="0%" />
          <stop stopColor="#FEC403" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="TC_svg_linearGradient-4"
        >
          <stop stopColor="#DB1E36" offset="0%" />
          <stop stopColor="#D51931" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="TC_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="TC_svg_TC">
          <rect
            id="TC_svg_FlagBackground"
            fill="url(#TC_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="TC_svg_Mask-Copy"
            fill="url(#TC_svg_linearGradient-2)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <path
            d="M13,7.5 L13,4.99934196 C13,4.44742064 13.4437166,4 13.9998075,4 L17.0001925,4 C17.5523709,4 18,4.44095969 18,4.99934196 L18,7.5 C18,10 15.5,11 15.5,11 C15.5,11 13,10 13,7.5 Z"
            id="TC_svg_Mask"
            fill="url(#TC_svg_linearGradient-1)"
            fillRule="nonzero"
          />
          <path
            d="M15.6441187,10.3696764 C15.9072386,10.2205751 16.1708832,10.0360239 16.4155176,9.81585293 C17.0987311,9.20096081 17.5,8.43854989 17.5,7.5 L17.5,4.99934196 C17.5,4.7198881 17.2790226,4.5 17.0001925,4.5 L13.9998075,4.5 C13.7214614,4.5 13.5,4.72195823 13.5,4.99934196 L13.5,7.5 C13.5,8.43854989 13.9012689,9.20096081 14.5844824,9.81585293 C14.8291168,10.0360239 15.0927614,10.2205751 15.3558813,10.3696764 C15.408632,10.3995685 15.4569336,10.4256533 15.5,10.4479782 C15.5430664,10.4256533 15.591368,10.3995685 15.6441187,10.3696764 Z"
            id="TC_svg_Mask"
            fill="url(#TC_svg_linearGradient-3)"
            fillRule="nonzero"
          />
          <ellipse
            id="TC_svg_Oval-193"
            fill="#BA5B1F"
            cx={16.5}
            cy={6}
            rx={1}
            ry={1}
          />
          <ellipse
            id="TC_svg_Oval-193"
            fill="#FF9F3E"
            transform="translate(14.311866, 6.030154) rotate(-20.000000) translate(-14.311866, -6.030154) "
            cx={14.3118665}
            cy={6.03015369}
            rx={1}
            ry={1}
          />
          <ellipse
            id="TC_svg_Oval-193"
            fill="#FF937F"
            transform="translate(14.711309, 6.046846) rotate(25.000000) translate(-14.711309, -6.046846) "
            cx={14.7113091}
            cy={6.04684611}
            rx={1}
            ry={1}
          />
          <polygon
            id="TC_svg_Rectangle-1188"
            fill="#01A827"
            points="15 8 15.5 7 16 8 16 9 15 9"
          />
          <path
            d="M3,3.22996746 L-1.3516287,-0.5 L0.660232527,-0.5 L4.16023253,2 L4.85660189,2 L9.5,-0.902123821 L9.5,0.25 C9.5,0.552509227 9.33308555,0.876533554 9.08215972,1.05576629 L6,3.25730895 L6,3.77003254 L9.13722049,6.45907867 C9.59934261,6.85518335 9.34102897,7.5 8.75,7.5 C8.50478614,7.5 8.2052751,7.40393402 8.00092153,7.25796718 L4.83976747,5 L4.14339811,5 L-0.5,7.90212382 L-0.5,6.24269105 L3,3.74269105 L3,3.22996746 Z"
            id="TC_svg_Rectangle-36"
            fill="url(#TC_svg_linearGradient-1)"
            fillRule="nonzero"
          />
          <path
            d="M3.5,3 L0,0 L0.5,0 L4,2.5 L5,2.5 L9,0 L9,0.25 C9,0.388071187 8.91348267,0.561798096 8.79154062,0.648899555 L5.5,3 L5.5,4 L8.8118248,6.83870697 C8.91575109,6.92778665 8.8840332,7 8.75,7 L8.75,7 C8.61192881,7 8.41348267,6.9382019 8.29154062,6.85110044 L5,4.5 L4,4.5 L0,7 L0,6.5 L3.5,4 L3.5,3 Z"
            id="TC_svg_Rectangle-36"
            fill="url(#TC_svg_linearGradient-4)"
          />
          <path
            d="M0,2.5 L0,4.5 L3.5,4.5 L3.5,7.00461102 C3.5,7.2782068 3.71403503,7.5 4.00468445,7.5 L4.99531555,7.5 C5.27404508,7.5 5.5,7.2842474 5.5,7.00461102 L5.5,4.5 L9.00952148,4.5 C9.28040529,4.5 9.5,4.28596497 9.5,3.99531555 L9.5,3.00468445 C9.5,2.72595492 9.28494263,2.5 9.00952148,2.5 L5.5,2.5 L5.5,0 L3.5,0 L3.5,2.5 L0,2.5 Z"
            id="TC_svg_Rectangle-2"
            fill="url(#TC_svg_linearGradient-1)"
          />
          <polygon
            id="TC_svg_Rectangle-36"
            fill="url(#TC_svg_linearGradient-4)"
            points="0 3 4 3 4 2.5 4 0 5 0 5 2.5 5 3 9 3 9 4 5 4 5 4.5 5 7 4 7 4 4.5 4 4 0 4"
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
