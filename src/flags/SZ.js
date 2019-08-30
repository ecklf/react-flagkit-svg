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
      <title>{"SZ"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SZ_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SZ_svg_linearGradient-2"
        >
          <stop stopColor="#486BCA" offset="0%" />
          <stop stopColor="#3E5FBA" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SZ_svg_linearGradient-3"
        >
          <stop stopColor="#FFDF20" offset="0%" />
          <stop stopColor="#FFDA00" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SZ_svg_linearGradient-4"
        >
          <stop stopColor="#CF1615" offset="0%" />
          <stop stopColor="#B20D0C" offset="100%" />
        </linearGradient>
        <ellipse id="SZ_svg_path-5" cx={4.5} cy={2.5} rx={4.5} ry={2.5} />
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SZ_svg_linearGradient-7"
        >
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="SZ_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="SZ_svg_SZ">
          <rect
            id="SZ_svg_FlagBackground"
            fill="url(#SZ_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="SZ_svg_Rectangle-2"
            fill="url(#SZ_svg_linearGradient-2)"
            x={0}
            y={0}
            width={21}
            height={3}
          />
          <rect
            id="SZ_svg_Rectangle-2"
            fill="url(#SZ_svg_linearGradient-2)"
            x={0}
            y={12}
            width={21}
            height={3}
          />
          <rect
            id="SZ_svg_Rectangle-2"
            fill="url(#SZ_svg_linearGradient-3)"
            x={0}
            y={3}
            width={21}
            height={9}
          />
          <rect
            id="SZ_svg_Rectangle-2-Copy-4"
            fill="url(#SZ_svg_linearGradient-4)"
            x={0}
            y={4}
            width={21}
            height={7}
          />
          <g id="SZ_svg_Oval-190" transform="translate(6.000000, 5.000000)">
            <mask id="SZ_svg_mask-6" fill="white">
              <use xlinkHref="#path-5" />
            </mask>
            <use
              id="SZ_svg_Mask"
              fill="url(#SZ_svg_linearGradient-1)"
              xlinkHref="#path-5"
            />
            <polygon
              id="SZ_svg_Rectangle-1180"
              fill="url(#SZ_svg_linearGradient-7)"
              mask="url(#SZ_svg_mask-6)"
              transform="translate(2.500000, 2.500000) scale(-1, 1) translate(-2.500000, -2.500000) "
              points="0 0 5 0 5 5 1 5"
            />
            <circle
              id="SZ_svg_Oval-191"
              fill="#1A1A1A"
              mask="url(#SZ_svg_mask-6)"
              cx={5.5}
              cy={2.5}
              r={1}
            />
            <circle
              id="SZ_svg_Oval-191"
              fill="#F6F6F6"
              mask="url(#SZ_svg_mask-6)"
              cx={3.5}
              cy={2.5}
              r={1}
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
