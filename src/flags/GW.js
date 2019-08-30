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
      <title>{"GW"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GW_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GW_svg_linearGradient-2"
        >
          <stop stopColor="#1AB558" offset="0%" />
          <stop stopColor="#169E4D" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GW_svg_linearGradient-3"
        >
          <stop stopColor="#FFD952" offset="0%" />
          <stop stopColor="#FCD036" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GW_svg_linearGradient-4"
        >
          <stop stopColor="#E72B42" offset="0%" />
          <stop stopColor="#CC162C" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GW_svg_linearGradient-5"
        >
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="GW_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="GW_svg_GW">
          <rect
            id="GW_svg_FlagBackground"
            fill="url(#GW_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="GW_svg_Rectangle-2"
            fill="url(#GW_svg_linearGradient-2)"
            x={0}
            y={7}
            width={21}
            height={8}
          />
          <rect
            id="GW_svg_Rectangle-2"
            fill="url(#GW_svg_linearGradient-3)"
            x={0}
            y={0}
            width={21}
            height={7}
          />
          <rect
            id="GW_svg_Rectangle-2"
            fill="url(#GW_svg_linearGradient-4)"
            x={0}
            y={0}
            width={8}
            height={15}
          />
          <polygon
            id="GW_svg_Star-53"
            fill="url(#GW_svg_linearGradient-5)"
            points="4 8.45877033 2.53053687 9.52254249 3.08815523 7.79627633 1.62235871 6.72745751 3.43644894 6.72433851 4 5 4.56355106 6.72433851 6.37764129 6.72745751 4.91184477 7.79627633 5.46946313 9.52254249"
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
