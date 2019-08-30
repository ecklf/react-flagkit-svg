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
      <title>{"VU"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="VU_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="VU_svg_linearGradient-2"
        >
          <stop stopColor="#27AB53" offset="0%" />
          <stop stopColor="#219447" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="VU_svg_linearGradient-3"
        >
          <stop stopColor="#EC2547" offset="0%" />
          <stop stopColor="#CE1A39" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="VU_svg_linearGradient-4"
        >
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="VU_svg_linearGradient-5"
        >
          <stop stopColor="#FFD449" offset="0%" />
          <stop stopColor="#FDCD34" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="VU_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="VU_svg_VU">
          <rect
            id="VU_svg_FlagBackground"
            fill="url(#VU_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="VU_svg_Rectangle-2"
            fill="url(#VU_svg_linearGradient-2)"
            x={0.2}
            y={9}
            width={21}
            height={6}
          />
          <rect
            id="VU_svg_Rectangle-2"
            fill="url(#VU_svg_linearGradient-3)"
            x={0.2}
            y={0}
            width={21}
            height={6}
          />
          <path
            d="M8.2,6 L21.2,6 L21.2,9 L8.2,9 L0.2,15 L0.2,0 L8.2,6 Z"
            id="VU_svg_Combined-Shape"
            fill="url(#VU_svg_linearGradient-4)"
          />
          <path
            d="M6.86666667,7.5 L-0.6,1.9 L-1,1.6 L-0.4,0.8 L0,1.1 L7.86666667,7 L20.7,7 L21.2,7 L21.2,8 L20.7,8 L7.7,8 L8,7.9 L0,13.9 L-0.4,14.2 L-1,13.4 L-0.6,13.1 L6.86666667,7.5 Z"
            id="VU_svg_Combined-Shape"
            fill="url(#VU_svg_linearGradient-5)"
            fillRule="nonzero"
          />
          <path
            d="M2.7,9 C1.87157288,9 1.2,8.32842712 1.2,7.5 C1.2,6.67157288 1.87157288,6 2.7,6 C3.52842712,6 4.2,6.67157288 4.2,7.5 C4.2,8.22719484 3.38679788,9.86267318 2.7,10 C2.60439134,10.0191172 2.80123229,9 2.7,9 Z M2.7,8.25 C2.97614237,8.5 3.2,7.77614237 3.2,7.5 C3.2,7.22385763 2.97614237,7 2.7,7 C2.42385763,7 2.2,7.22385763 2.2,7.5 C2.2,7.77614237 2.42385763,8.5 2.7,8.25 Z"
            id="VU_svg_Combined-Shape"
            fill="url(#VU_svg_linearGradient-5)"
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
