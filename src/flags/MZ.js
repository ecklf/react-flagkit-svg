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
      <title>{"MZ"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="MZ_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="MZ_svg_linearGradient-2"
        >
          <stop stopColor="#FFE547" offset="0%" />
          <stop stopColor="#FCE032" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="MZ_svg_linearGradient-3"
        >
          <stop stopColor="#118C81" offset="0%" />
          <stop stopColor="#0D7168" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="MZ_svg_linearGradient-4"
        >
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="MZ_svg_linearGradient-5"
        >
          <stop stopColor="#EF2147" offset="0%" />
          <stop stopColor="#D01739" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="MZ_svg_linearGradient-6"
        >
          <stop stopColor="#FDE444" offset="0%" />
          <stop stopColor="#FCE032" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="MZ_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="MZ_svg_MZ">
          <rect
            id="MZ_svg_FlagBackground"
            fill="url(#MZ_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="MZ_svg_Rectangle-2"
            fill="url(#MZ_svg_linearGradient-2)"
            x={0}
            y={11}
            width={21}
            height={4}
          />
          <rect
            id="MZ_svg_Rectangle-2"
            fill="url(#MZ_svg_linearGradient-3)"
            x={0}
            y={0}
            width={21}
            height={4}
          />
          <rect
            id="MZ_svg_Rectangle-2"
            fill="url(#MZ_svg_linearGradient-1)"
            x={0}
            y={4}
            width={21}
            height={7}
          />
          <rect
            id="MZ_svg_Rectangle-2"
            fill="url(#MZ_svg_linearGradient-4)"
            x={0}
            y={5}
            width={21}
            height={5}
          />
          <polygon
            id="MZ_svg_Rectangle-83"
            fill="url(#MZ_svg_linearGradient-5)"
            points="0 0 10 7.5 0 15"
          />
          <polygon
            id="MZ_svg_Star-27"
            fill="url(#MZ_svg_linearGradient-6)"
            points="3.5 8.45555972 2.03053687 9.52254249 2.5912087 7.79528419 1.12235871 6.72745751 2.93833609 6.72693595 3.5 5 4.06166391 6.72693595 5.87764129 6.72745751 4.4087913 7.79528419 4.96946313 9.52254249"
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
