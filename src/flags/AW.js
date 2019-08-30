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
      <title>{"AW"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="AW_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="AW_svg_linearGradient-2"
        >
          <stop stopColor="#5098EA" offset="0%" />
          <stop stopColor="#458BDB" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="AW_svg_linearGradient-3"
        >
          <stop stopColor="#E82045" offset="0%" />
          <stop stopColor="#D01739" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="AW_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="AW_svg_AW">
          <rect
            id="AW_svg_FlagBackground"
            fill="url(#AW_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="AW_svg_Mask-Copy"
            fill="url(#AW_svg_linearGradient-2)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <path
            d="M1.80304035,4.95957252 C1.39898655,4.7864066 1.39898655,4.2135934 1.80304035,4.04042748 L3.36921134,3.36921134 L4.04042748,1.80304035 C4.2135934,1.39898655 4.7864066,1.39898655 4.95957252,1.80304035 L5.63078866,3.36921134 L7.19695965,4.04042748 C7.60101345,4.2135934 7.60101345,4.7864066 7.19695965,4.95957252 L5.63078866,5.63078866 L4.95957252,7.19695965 C4.7864066,7.60101345 4.2135934,7.60101345 4.04042748,7.19695965 L3.36921134,5.63078866 L1.80304035,4.95957252 Z"
            id="AW_svg_Star"
            fill="url(#AW_svg_linearGradient-1)"
            fillRule="nonzero"
          />
          <polygon
            id="AW_svg_Star"
            fill="url(#AW_svg_linearGradient-3)"
            points="3.75 5.25 2 4.5 3.75 3.75 4.5 2 5.25 3.75 7 4.5 5.25 5.25 4.5 7"
          />
          <rect
            id="AW_svg_Rectangle-1337"
            fill="#F9D536"
            x={0}
            y={11}
            width={21}
            height={1}
          />
          <rect
            id="AW_svg_Rectangle-1337-Copy"
            fill="#F9D536"
            x={0}
            y={9}
            width={21}
            height={1}
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
