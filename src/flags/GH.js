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
      <title>{"GH"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GH_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GH_svg_linearGradient-2"
        >
          <stop stopColor="#E71F37" offset="0%" />
          <stop stopColor="#CC162C" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GH_svg_linearGradient-3"
        >
          <stop stopColor="#118B56" offset="0%" />
          <stop stopColor="#0B6B41" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GH_svg_linearGradient-4"
        >
          <stop stopColor="#FDD64C" offset="0%" />
          <stop stopColor="#FCD036" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GH_svg_linearGradient-5"
        >
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="GH_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="GH_svg_GH">
          <rect
            id="GH_svg_FlagBackground"
            fill="url(#GH_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="GH_svg_Rectangle-2"
            fill="url(#GH_svg_linearGradient-2)"
            x={0}
            y={0}
            width={21}
            height={5}
          />
          <rect
            id="GH_svg_Rectangle-2"
            fill="url(#GH_svg_linearGradient-3)"
            x={0}
            y={10}
            width={21}
            height={5}
          />
          <rect
            id="GH_svg_Rectangle-2"
            fill="url(#GH_svg_linearGradient-4)"
            x={0}
            y={5}
            width={21}
            height={5}
          />
          <polygon
            id="GH_svg_Star-53"
            fill="url(#GH_svg_linearGradient-5)"
            points="10.5 8.70877033 9.03053687 9.77254249 9.58815523 8.04627633 8.12235871 6.97745751 9.93644894 6.97433851 10.5 5.25 11.0635511 6.97433851 12.8776413 6.97745751 11.4118448 8.04627633 11.9694631 9.77254249"
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
