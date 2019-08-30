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
      <title>{"NR"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="NR_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="NR_svg_linearGradient-2"
        >
          <stop stopColor="#0744A7" offset="0%" />
          <stop stopColor="#00307D" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="NR_svg_linearGradient-3"
        >
          <stop stopColor="#FCC747" offset="0%" />
          <stop stopColor="#FEC539" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="NR_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="NR_svg_NR">
          <rect
            id="NR_svg_FlagBackground"
            fill="url(#NR_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="NR_svg_Mask-Copy"
            fill="url(#NR_svg_linearGradient-2)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="NR_svg_Rectangle-1337"
            fill="url(#NR_svg_linearGradient-3)"
            x={0}
            y={6}
            width={21}
            height={2}
          />
          <polygon
            id="NR_svg_Star-27"
            fill="url(#NR_svg_linearGradient-1)"
            points="5.5 12.25 4.72745751 13.3776413 4.76526843 12.0112712 3.47745751 12.4694631 4.31117935 11.3862712 3 11 4.31117935 10.6137288 3.47745751 9.53053687 4.76526843 9.98872876 4.72745751 8.62235871 5.5 9.75 6.27254249 8.62235871 6.23473157 9.98872876 7.52254249 9.53053687 6.68882065 10.6137288 8 11 6.68882065 11.3862712 7.52254249 12.4694631 6.23473157 12.0112712 6.27254249 13.3776413"
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
