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
      <title>{"MY"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="MY_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="MY_svg_linearGradient-2"
        >
          <stop stopColor="#E1244A" offset="0%" />
          <stop stopColor="#BE1134" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="MY_svg_linearGradient-3"
        >
          <stop stopColor="#0C3F8E" offset="0%" />
          <stop stopColor="#032A67" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="MY_svg_linearGradient-4"
        >
          <stop stopColor="#FFD34F" offset="0%" />
          <stop stopColor="#FFCB2F" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="MY_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="MY_svg_MY">
          <rect
            id="MY_svg_FlagBackground"
            fill="url(#MY_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <path
            d="M10,0 L21,0 L21,1 L10,1 L10,0 Z M10,2 L21,2 L21,3 L10,3 L10,2 Z M10,4 L21,4 L21,5 L10,5 L10,4 Z M10,6 L21,6 L21,7 L10,7 L10,6 Z M0,8 L21,8 L21,9 L0,9 L0,8 Z M0,10 L21,10 L21,11 L0,11 L0,10 Z M0,12 L21,12 L21,13 L0,13 L0,12 Z M0,14 L21,14 L21,15 L0,15 L0,14 Z"
            id="MY_svg_Rectangle-537"
            fill="url(#MY_svg_linearGradient-2)"
          />
          <rect
            id="MY_svg_Rectangle-1568"
            fill="url(#MY_svg_linearGradient-3)"
            x={0}
            y={0}
            width={12}
            height={8}
          />
          <path
            d="M6.87363497,1.6568923 C6.60168078,1.55545057 6.30731598,1.5 6,1.5 C4.61928813,1.5 3.5,2.61928813 3.5,4 C3.5,5.38071187 4.61928813,6.5 6,6.5 C6.30731598,6.5 6.60168078,6.44454943 6.87363497,6.3431077 C6.36024587,6.75416668 5.70883166,7 5,7 C3.34314575,7 2,5.65685425 2,4 C2,2.34314575 3.34314575,1 5,1 C5.70883166,1 6.36024587,1.24583332 6.87363497,1.6568923 Z M8,4.81999999 L7.13223252,5.80193774 L7.35889819,4.51126163 L6.05014418,4.44504187 L7.20055912,3.81753284 L6.43633704,2.7530204 L7.64421534,3.26120553 L8,2 L8.35578466,3.26120553 L9.56366296,2.7530204 L8.79944088,3.81753284 L9.94985582,4.44504187 L8.64110181,4.51126163 L8.86776748,5.80193774 L8,4.81999999 Z"
            id="MY_svg_Oval-12"
            fill="url(#MY_svg_linearGradient-4)"
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
