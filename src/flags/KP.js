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
      <title>{"KP"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="KP_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="KP_svg_linearGradient-2"
        >
          <stop stopColor="#1461B6" offset="0%" />
          <stop stopColor="#0B52A1" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="KP_svg_linearGradient-3"
        >
          <stop stopColor="#F53846" offset="0%" />
          <stop stopColor="#EB2130" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="KP_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="KP_svg_KP">
          <rect
            id="KP_svg_FlagBackground"
            fill="url(#KP_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="KP_svg_Rectangle-2"
            fill="url(#KP_svg_linearGradient-2)"
            x={0}
            y={0}
            width={21}
            height={3}
          />
          <rect
            id="KP_svg_Rectangle-2"
            fill="url(#KP_svg_linearGradient-2)"
            x={0}
            y={12}
            width={21}
            height={3}
          />
          <rect
            id="KP_svg_Rectangle-2"
            fill="url(#KP_svg_linearGradient-1)"
            x={0}
            y={3}
            width={21}
            height={9}
          />
          <rect
            id="KP_svg_Rectangle-2-Copy-4"
            fill="url(#KP_svg_linearGradient-3)"
            x={0}
            y={4}
            width={21}
            height={7}
          />
          <path
            d="M7.5,10 C6.11928813,10 5,8.88071187 5,7.5 C5,6.11928813 6.11928813,5 7.5,5 C8.88071187,5 10,6.11928813 10,7.5 C10,8.88071187 8.88071187,10 7.5,10 Z M7.5,8.50318386 L8.96946313,9.52254249 L8.45408455,7.81000086 L9.87764129,6.72745751 L8.08965668,6.68840721 L7.5,5 L6.91034332,6.68840721 L5.12235871,6.72745751 L6.54591545,7.81000086 L6.03053687,9.52254249 L7.5,8.50318386 Z"
            id="KP_svg_Oval-12"
            fill="url(#KP_svg_linearGradient-1)"
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
