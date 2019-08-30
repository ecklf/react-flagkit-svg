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
      <title>{"SO"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SO_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SO_svg_linearGradient-2"
        >
          <stop stopColor="#5D9FE9" offset="0%" />
          <stop stopColor="#458BDB" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="SO_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="SO_svg_SO">
          <rect
            id="SO_svg_FlagBackground"
            fill="url(#SO_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="SO_svg_Mask-Copy"
            fill="url(#SO_svg_linearGradient-2)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <polygon
            id="SO_svg_Star-8"
            fill="url(#SO_svg_linearGradient-1)"
            points="10.5 9.25500007 7.85496636 11.1405765 8.83089575 8.04232485 6.22024568 6.10942353 9.46843684 6.08017512 10.5 3 11.5315632 6.08017512 14.7797543 6.10942353 12.1691043 8.04232485 13.1450336 11.1405765"
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
