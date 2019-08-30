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
      <title>{"TO"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="TO_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="TO_svg_linearGradient-2"
        >
          <stop stopColor="#E20F1B" offset="0%" />
          <stop stopColor="#C00711" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="TO_svg_linearGradient-3"
        >
          <stop stopColor="#DF101B" offset="0%" />
          <stop stopColor="#C00711" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="TO_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="TO_svg_TO">
          <rect
            id="TO_svg_FlagBackground"
            fill="url(#TO_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="TO_svg_Mask-Copy"
            fill="url(#TO_svg_linearGradient-2)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="TO_svg_Rectangle-2"
            fill="url(#TO_svg_linearGradient-1)"
            x={0}
            y={0}
            width={12}
            height={8}
          />
          <path
            d="M7,3 L7,1.2578125 C7,1.10414124 6.89020264,1 6.75476074,1 L5.24523926,1 C5.10752869,1 5,1.11542659 5,1.2578125 L5,3 L3.2578125,3 C3.10414124,3 3,3.10979736 3,3.24523926 L3,4.75476074 C3,4.89247131 3.11542659,5 3.2578125,5 L5,5 L5,6.7421875 C5,6.89585876 5.10979736,7 5.24523926,7 L6.75476074,7 C6.89247131,7 7,6.88457341 7,6.7421875 L7,5 L8.7421875,5 C8.89585876,5 9,4.89020264 9,4.75476074 L9,3.24523926 C9,3.10752869 8.88457341,3 8.7421875,3 L7,3 L7,3 Z"
            id="TO_svg_Rectangle-1703"
            fill="url(#TO_svg_linearGradient-3)"
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
