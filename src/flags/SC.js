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
      <title>{"SC"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SC_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SC_svg_linearGradient-2"
        >
          <stop stopColor="#1DBE4F" offset="0%" />
          <stop stopColor="#159B3F" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SC_svg_linearGradient-3"
        >
          <stop stopColor="#0858B4" offset="0%" />
          <stop stopColor="#013F87" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SC_svg_linearGradient-4"
        >
          <stop stopColor="#ED3535" offset="0%" />
          <stop stopColor="#D62828" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SC_svg_linearGradient-5"
        >
          <stop stopColor="#08964F" offset="0%" />
          <stop stopColor="#017B3E" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SC_svg_linearGradient-6"
        >
          <stop stopColor="#FFDD67" offset="0%" />
          <stop stopColor="#FDD856" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="SC_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="SC_svg_SC">
          <rect
            id="SC_svg_FlagBackground"
            fill="url(#SC_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="SC_svg_Mask-Copy"
            fill="url(#SC_svg_linearGradient-2)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <polygon
            id="SC_svg_Rectangle-253"
            fill="url(#SC_svg_linearGradient-3)"
            points="0 0 7 0 0 15"
          />
          <polygon
            id="SC_svg_Rectangle-253"
            fill="url(#SC_svg_linearGradient-4)"
            points="14 0 21 0 21 5 0 15"
          />
          <polygon
            id="SC_svg_Rectangle-253"
            fill="url(#SC_svg_linearGradient-5)"
            points="21 15 21 10 0 15"
          />
          <polygon
            id="SC_svg_Rectangle-253"
            fill="url(#SC_svg_linearGradient-6)"
            points="7 0 14 0 0 15"
          />
          <polygon
            id="SC_svg_Rectangle-253"
            fill="url(#SC_svg_linearGradient-1)"
            points="21 10 21 5 0 15"
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
