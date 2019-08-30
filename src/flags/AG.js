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
      <title>{"AG"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="AG_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="AG_svg_linearGradient-2"
        >
          <stop stopColor="#E2243B" offset="0%" />
          <stop stopColor="#CC162C" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="AG_svg_linearGradient-3"
        >
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
        <polygon id="AG_svg_path-4" points="0 0 21 0 10.5 15" />
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="AG_svg_linearGradient-6"
        >
          <stop stopColor="#FFCF3C" offset="0%" />
          <stop stopColor="#FECB2F" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="AG_svg_linearGradient-7"
        >
          <stop stopColor="#1984D8" offset="0%" />
          <stop stopColor="#1175C4" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="AG_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="AG_svg_AG">
          <rect
            id="AG_svg_FlagBackground"
            fill="url(#AG_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <path
            d="M8.5,7 C8.5,7.73933629 8.90117129,8.38497401 9.49770903,8.73110833 M11.576137,8.68609748 C12.1317007,8.33077576 12.5,7.70839833 12.5,7"
            id="AG_svg_Oval-5"
            opacity={0.75}
          />
          <ellipse
            id="AG_svg_Oval-5"
            fillOpacity={0.5}
            fill="#FFFFFF"
            cx={10.5}
            cy={6.5}
            rx={1}
            ry={1.5}
          />
          <rect
            id="AG_svg_Mask-Copy"
            fill="url(#AG_svg_linearGradient-2)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <mask id="AG_svg_mask-5" fill="white">
            <use xlinkHref="#path-4" />
          </mask>
          <use
            id="AG_svg_Mask"
            fill="url(#AG_svg_linearGradient-3)"
            xlinkHref="#path-4"
          />
          <polygon
            id="AG_svg_Star-1"
            fill="url(#AG_svg_linearGradient-6)"
            mask="url(#AG_svg_mask-5)"
            points="10.5 8.25 8.77792455 10.1574579 8.90900974 7.59099026 6.3425421 7.72207545 8.25 6 5.99999999 3.99999993 8.90900963 4.49999993 8.49999999 1.49999999 10.5 3.99999993 12.5 1.49999999 12.0909905 4.49999993 15 4 12.75 6 14.6574579 7.72207545 12.0909903 7.59099026 12.2220754 10.1574579"
          />
          <rect
            id="AG_svg_Rectangle-2"
            fill="url(#AG_svg_linearGradient-7)"
            mask="url(#AG_svg_mask-5)"
            x={0}
            y={6}
            width={21}
            height={4}
          />
          <rect
            id="AG_svg_Rectangle-2"
            fill="url(#AG_svg_linearGradient-1)"
            mask="url(#AG_svg_mask-5)"
            x={0}
            y={10}
            width={21}
            height={5}
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
