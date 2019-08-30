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
      <title>{"SY"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SY_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SY_svg_linearGradient-2"
        >
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SY_svg_linearGradient-3"
        >
          <stop stopColor="#E32139" offset="0%" />
          <stop stopColor="#CC162C" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SY_svg_linearGradient-4"
        >
          <stop stopColor="#128A49" offset="0%" />
          <stop stopColor="#0F7A40" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="SY_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="SY_svg_SY">
          <rect
            id="SY_svg_FlagBackground"
            fill="url(#SY_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="SY_svg_Rectangle-2"
            fill="url(#SY_svg_linearGradient-2)"
            x={0}
            y={10}
            width={21}
            height={5}
          />
          <rect
            id="SY_svg_Rectangle-2"
            fill="url(#SY_svg_linearGradient-3)"
            x={0}
            y={0}
            width={21}
            height={5}
          />
          <rect
            id="SY_svg_Rectangle-2"
            fill="url(#SY_svg_linearGradient-1)"
            x={0}
            y={5}
            width={21}
            height={5}
          />
          <polygon
            id="SY_svg_Star-33"
            fill="url(#SY_svg_linearGradient-4)"
            points="7 8.31999999 5.8244295 9.11803399 6.22013366 7.75339393 5.09788697 6.88196601 6.5180161 6.83660607 7 5.5 7.4819839 6.83660607 8.90211303 6.88196601 7.77986634 7.75339393 8.1755705 9.11803399"
          />
          <polygon
            id="SY_svg_Star-33"
            fill="url(#SY_svg_linearGradient-4)"
            points="14 8.31999999 12.8244295 9.11803399 13.2201337 7.75339393 12.097887 6.88196601 13.5180161 6.83660607 14 5.5 14.4819839 6.83660607 15.902113 6.88196601 14.7798663 7.75339393 15.1755705 9.11803399"
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
