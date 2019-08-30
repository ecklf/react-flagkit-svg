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
      <title>{"BB"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="BB_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="BB_svg_linearGradient-2"
        >
          <stop stopColor="#1132C7" offset="0%" />
          <stop stopColor="#0522A5" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="BB_svg_linearGradient-3"
        >
          <stop stopColor="#08379D" offset="0%" />
          <stop stopColor="#042A7D" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="BB_svg_linearGradient-4"
        >
          <stop stopColor="#FFCC50" offset="0%" />
          <stop stopColor="#FFC63C" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="BB_svg_linearGradient-5"
        >
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="BB_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="BB_svg_BB">
          <rect
            id="BB_svg_FlagBackground"
            fill="url(#BB_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="BB_svg_Mask-Copy"
            fill="url(#BB_svg_linearGradient-2)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="BB_svg_Mask"
            fill="url(#BB_svg_linearGradient-3)"
            x={10}
            y={0}
            width={11}
            height={15}
          />
          <rect
            id="BB_svg_Rectangle-2"
            fill="url(#BB_svg_linearGradient-3)"
            x={0}
            y={0}
            width={7}
            height={15}
          />
          <rect
            id="BB_svg_Rectangle-2-Copy"
            fill="url(#BB_svg_linearGradient-4)"
            x={7}
            y={0}
            width={7}
            height={15}
          />
          <path
            d="M10.378269,4.70856857 C10.4566062,4.59337933 10.5844043,4.59841919 10.6563604,4.70856857 L11.3637506,5.79143143 C11.4389991,5.90662067 11.3828125,6.00000001 11.2460842,6.00000001 L11.0039158,6.00000003 C10.863682,6.00000004 10.7607422,6.10742192 10.7748849,6.24884943 L10.9751151,8.25115061 C10.9888586,8.38858633 11.1159668,8.5 11.25,8.5 C11.3880712,8.5 11.578125,8.42271423 11.6805115,8.32142761 L11.8194885,8.18394348 C11.9191823,8.08532067 12,7.89777878 12,7.75167352 L12,7.25369758 C12,7.11358427 11.921875,6.921875 11.8194885,6.81948853 L11.6805115,6.68051147 C11.5808177,6.58081774 11.5984192,6.46719361 11.734375,6.42187501 L12.765625,6.07812504 C12.8950667,6.03497779 12.9802439,6.10742192 12.9542338,6.24884943 L12.5859883,8.25115061 C12.5607124,8.38858633 12.4585977,8.57846832 12.3590293,8.67418671 L11.6811929,9.32581329 C11.5811228,9.42201396 11.3840332,9.5 11.25,9.5 C11.1119288,9.5 11,9.60701752 11,9.75234222 L11,10.2476578 C11,10.3870225 10.8929825,10.5 10.7476578,10.5 L10.2523422,10.5 C10.1129775,10.5 10,10.3929825 10,10.2476578 L10,9.75234222 C10,9.61297746 9.8840332,9.5 9.75,9.5 C9.61192881,9.5 9.42153168,9.42153168 9.32581329,9.32581329 L8.67418671,8.67418671 C8.57798604,8.57798604 8.47851563,8.39257813 8.45023012,8.25115061 L8.04976988,6.24884943 C8.02228273,6.11141371 8.09841919,6.03280644 8.234375,6.07812504 L9.265625,6.42187501 C9.39506674,6.46502225 9.421875,6.578125 9.31948853,6.68051147 L9.18051147,6.81948853 C9.08081774,6.91918226 9,7.10759232 9,7.25369758 L9,7.75167352 C9,7.89178682 9.078125,8.08265686 9.18051147,8.18394348 L9.31948853,8.32142761 C9.41918226,8.42005042 9.6159668,8.5 9.75,8.5 C9.88807119,8.5 10.0107422,8.39257812 10.0248849,8.25115061 L10.2251151,6.24884939 C10.2388586,6.11141367 10.1328125,6 9.99608421,6 L9.75391579,6 C9.61368197,6 9.56693234,5.90158081 9.64184208,5.79143143 L10.378269,4.70856857 Z"
            id="BB_svg_Combined-Shape"
            fill="url(#BB_svg_linearGradient-5)"
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
