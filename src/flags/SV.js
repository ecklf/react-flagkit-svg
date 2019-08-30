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
      <title>{"SV"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SV_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SV_svg_linearGradient-2"
        >
          <stop stopColor="#1B57C4" offset="0%" />
          <stop stopColor="#154BAD" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SV_svg_linearGradient-3"
        >
          <stop stopColor="#3C7839" offset="0%" />
          <stop stopColor="#31642E" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="SV_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="SV_svg_SV">
          <rect
            id="SV_svg_FlagBackground"
            fill="url(#SV_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="SV_svg_Rectangle-2"
            fill="url(#SV_svg_linearGradient-2)"
            x={0}
            y={0}
            width={21}
            height={5}
          />
          <rect
            id="SV_svg_Rectangle-2"
            fill="url(#SV_svg_linearGradient-2)"
            x={0}
            y={10}
            width={21}
            height={5}
          />
          <rect
            id="SV_svg_Rectangle-2-Copy-4"
            fill="url(#SV_svg_linearGradient-1)"
            x={0}
            y={5}
            width={21}
            height={5}
          />
          <path
            d="M9.29996095,5.89988286 C8.81420448,6.26476719 8.5,6.8456904 8.5,7.5 C8.5,8.6045695 9.3954305,9.5 10.5,9.5 C11.6045695,9.5 12.5,8.6045695 12.5,7.5 C12.5,6.8456904 12.1857955,6.26476719 11.700039,5.89988286 L11,8 L10,8 L9.29996095,5.89988286 Z"
            id="SV_svg_Oval-12"
            fill="url(#SV_svg_linearGradient-3)"
          />
          <polygon
            id="SV_svg_Rectangle-483"
            fill="#F9C92E"
            points="10.5 5.5 11 8 10 8"
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
