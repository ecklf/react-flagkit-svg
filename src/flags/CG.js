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
      <title>{"CG"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="CG_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="CG_svg_linearGradient-2"
        >
          <stop stopColor="#F33630" offset="0%" />
          <stop stopColor="#DC241E" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="CG_svg_linearGradient-3"
        >
          <stop stopColor="#009643" offset="0%" />
          <stop stopColor="#09C15B" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="CG_svg_linearGradient-4"
        >
          <stop stopColor="#FCDF4A" offset="0%" />
          <stop stopColor="#FCE154" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="CG_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="CG_svg_CG">
          <rect
            id="CG_svg_FlagBackground"
            fill="url(#CG_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <g id="CG_svg_Group-2" transform="translate(-1.060000, -5.020000)">
            <polygon
              id="CG_svg_Rectangle-74"
              fill="url(#CG_svg_linearGradient-2)"
              points="6.06152385 19.017348 21.0615238 5.01734803 22.0615238 5.01734803 22.0615238 20.017348 6.06152385 20.017348"
            />
            <polygon
              id="CG_svg_Rectangle-74-Copy"
              fill="url(#CG_svg_linearGradient-3)"
              transform="translate(9.061524, 12.517348) scale(-1, -1) translate(-9.061524, -12.517348) "
              points="1.06152385 19.017348 16.0615238 5.01734803 17.0615238 5.01734803 17.0615238 20.017348 1.06152385 20.017348"
            />
            <polygon
              id="CG_svg_Rectangle-69-Copy"
              fill="url(#CG_svg_linearGradient-4)"
              transform="translate(11.870896, 12.167073) rotate(134.000000) translate(-11.870896, -12.167073) "
              points="-2.62910413 9.66707303 26.3708959 9.66707303 26.3708959 14.667073 -2.62910413 14.667073"
            />
          </g>
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
