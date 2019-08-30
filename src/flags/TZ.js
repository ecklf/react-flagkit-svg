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
      <title>{"TZ"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="TZ_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="TZ_svg_linearGradient-2"
        >
          <stop stopColor="#33CC4D" offset="0%" />
          <stop stopColor="#2AB441" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="TZ_svg_linearGradient-3"
        >
          <stop stopColor="#2DAFE4" offset="0%" />
          <stop stopColor="#1BA4DC" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="TZ_svg_linearGradient-4"
        >
          <stop stopColor="#FFD84F" offset="0%" />
          <stop stopColor="#FCD036" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="TZ_svg_linearGradient-5"
        >
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="TZ_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="TZ_svg_TZ">
          <rect
            id="TZ_svg_FlagBackground"
            fill="url(#TZ_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <polygon
            id="TZ_svg_Rectangle-2"
            fill="url(#TZ_svg_linearGradient-2)"
            points="0.00149566929 10.0039496 21.0014957 0.00394961946 0.00149566929 0.00394961946"
          />
          <polygon
            id="TZ_svg_Rectangle-2"
            fill="url(#TZ_svg_linearGradient-3)"
            points="0.00149566929 15.0039496 21.0014957 15.0039496 21.0014957 5.00394962"
          />
          <polygon
            id="TZ_svg_Rectangle-2"
            fill="url(#TZ_svg_linearGradient-4)"
            points="2.31328447 17.0039725 22.6295352 4.30897007 18.6897069 -1.99607326 -1.62654387 10.6989292"
          />
          <polygon
            id="TZ_svg_Rectangle-2"
            fill="url(#TZ_svg_linearGradient-5)"
            points="-0.470403564 17.3078992 24.1229912 1.94024053 21.4733949 -2.29999995 -3.11999989 13.0676587"
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
