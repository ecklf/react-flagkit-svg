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
      <title>{"CI"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="CI_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="CI_svg_linearGradient-2"
        >
          <stop stopColor="#1DC87D" offset="0%" />
          <stop stopColor="#169E62" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="CI_svg_linearGradient-3"
        >
          <stop stopColor="#F89242" offset="0%" />
          <stop stopColor="#F67F22" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="CI_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="CI_svg_CI">
          <rect
            id="CI_svg_FlagBackground"
            fill="url(#CI_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="CI_svg_Mask"
            fill="url(#CI_svg_linearGradient-2)"
            x={10}
            y={0}
            width={11}
            height={15}
          />
          <rect
            id="CI_svg_Rectangle-2"
            fill="url(#CI_svg_linearGradient-3)"
            x={0}
            y={0}
            width={7}
            height={15}
          />
          <rect
            id="CI_svg_Rectangle-2-Copy"
            fill="url(#CI_svg_linearGradient-1)"
            x={7}
            y={0}
            width={7}
            height={15}
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
