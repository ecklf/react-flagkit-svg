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
      <title>{"SG"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SG_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SG_svg_linearGradient-2"
        >
          <stop stopColor="#E12237" offset="0%" />
          <stop stopColor="#CE1126" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="SG_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="SG_svg_SG">
          <rect
            id="SG_svg_FlagBackground"
            fill="url(#SG_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="SG_svg_Rectangle-2"
            fill="url(#SG_svg_linearGradient-2)"
            x={0}
            y={0}
            width={21}
            height={8}
          />
          <rect
            id="SG_svg_Rectangle-2"
            fill="url(#SG_svg_linearGradient-1)"
            x={0}
            y={8}
            width={21}
            height={7}
          />
          <path
            d="M6.87363497,1.6568923 C6.60168078,1.55545057 6.30731598,1.5 6,1.5 C4.61928813,1.5 3.5,2.61928813 3.5,4 C3.5,5.38071187 4.61928813,6.5 6,6.5 C6.30731598,6.5 6.60168078,6.44454943 6.87363497,6.3431077 C6.36024587,6.75416668 5.70883166,7 5,7 C3.34314575,7 2,5.65685425 2,4 C2,2.34314575 3.34314575,1 5,1 C5.70883166,1 6.36024587,1.24583332 6.87363497,1.6568923 L6.87363497,1.6568923 Z M5.5,4 C5.22385763,4 5,3.77614237 5,3.5 C5,3.22385763 5.22385763,3 5.5,3 C5.77614237,3 6,3.22385763 6,3.5 C6,3.77614237 5.77614237,4 5.5,4 Z M6.5,6 C6.22385763,6 6,5.77614237 6,5.5 C6,5.22385763 6.22385763,5 6.5,5 C6.77614237,5 7,5.22385763 7,5.5 C7,5.77614237 6.77614237,6 6.5,6 Z M8.5,6 C8.22385763,6 8,5.77614237 8,5.5 C8,5.22385763 8.22385763,5 8.5,5 C8.77614237,5 9,5.22385763 9,5.5 C9,5.77614237 8.77614237,6 8.5,6 Z M9.5,4 C9.22385763,4 9,3.77614237 9,3.5 C9,3.22385763 9.22385763,3 9.5,3 C9.77614237,3 10,3.22385763 10,3.5 C10,3.77614237 9.77614237,4 9.5,4 Z M7.5,2.5 C7.22385763,2.5 7,2.27614237 7,2 C7,1.72385763 7.22385763,1.5 7.5,1.5 C7.77614237,1.5 8,1.72385763 8,2 C8,2.27614237 7.77614237,2.5 7.5,2.5 Z"
            id="SG_svg_Oval-12"
            fill="url(#SG_svg_linearGradient-1)"
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
